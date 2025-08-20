import type { AnyString, IsAny, IsNever, Prettify } from "../../utils/types";
import { $$, type ExpressionBuilderProvider } from "./expression-builder";
import type { State } from "./state";
import type { IChainable, IContext, INextable } from "./types";

export const NO_END_STATES: INextable[] = [] as const;

type PREVIOUS_CONTENT = "json";

export type ChainContext = {
	[nodeId: string]: any;
};

type AddIChainableToChainContext<
	N,
	CC extends ChainContext,
	WithPrevious = true,
> = N extends IChainable<infer Id, infer C>
	? IsNever<C> extends true
		? CC
		: IsAny<C> extends true
			? CC
			: Prettify<
					{ [k in Id]: C } & CC & {
							[k in PREVIOUS_CONTENT]: WithPrevious extends true ? C : never;
						}
				>
	: CC;

type ChainableProvider<N extends IChainable, CC extends ChainContext> =
	| N
	| ((params: { $: ExpressionBuilderProvider<CC> }) => N);

type MultipleChainableProvider<N extends IChainable, CC extends ChainContext> =
	| Array<N>
	| ((params: { $: ExpressionBuilderProvider<CC> }) => Array<N>);

/**
 * A collection of states to chain onto
 *
 * A Chain has a start and zero or more chainable ends. If there are
 * zero ends, calling next() on the Chain will fail.
 */
export class Chain<
	CC extends ChainContext = {},
	IdsInContext extends string[] = [],
> implements IChainable
{
	"~context": IContext = undefined as any;

	/**
	 * Begin a new Chain from one chainable
	 */
	public static start<N1 extends IChainable>(state: N1) {
		return new Chain<AddIChainableToChainContext<N1, {}>, [N1["id"]]>(
			state.startState,
			state.endStates,
			state,
		);
	}

	/**
	 * Make a Chain with specific start and end states, and a last-added Chainable
	 */
	public static custom(
		startState: State<any>,
		endStates: INextable[],
		lastAdded: IChainable,
	) {
		return new Chain(startState, endStates, lastAdded);
	}

	/**
	 * Identify this Chain
	 */
	public readonly id: string;

	/**
	 * The start state of this chain
	 */
	public readonly startState: State;

	/**
	 * The chainable end state(s) of this chain
	 */
	public readonly endStates: INextable[];

	private constructor(
		startState: State,
		endStates: INextable[],
		private readonly lastAdded: IChainable<string>,
	) {
		this.id = lastAdded.id;
		this.startState = startState;
		this.endStates = endStates;
	}

	private checkCanAddNext() {
		if (!this.endStates || this.endStates.length === 0) {
			throw new Error(
				`Cannot add to chain: last state in chain (${this.lastAdded.id}) does not allow it`,
			);
		}
	}

	/**
	 * Continue normal execution with the given state
	 */
	public next<N extends IChainable>(
		_next: ChainableProvider<N, CC>,
	): Chain<AddIChainableToChainContext<N, CC>, [...IdsInContext, N["id"]]> {
		void this.checkCanAddNext();

		let next: IChainable;
		if (typeof _next === "function") {
			const $ = $$<CC>();
			next = _next({ $: $ });
		} else {
			next = _next;
		}

		for (const endState of this.endStates) {
			endState.addNext(next);
		}

		return new Chain(this.startState, next.endStates, next);
	}

	public multiple<N extends IChainable>(
		_next: MultipleChainableProvider<N, CC>,
	): Chain<
		AddIChainableToChainContext<N, CC, false>,
		[...IdsInContext, N["id"]]
	> {
		void this.checkCanAddNext();

		let next: IChainable[];
		if (typeof _next === "function") {
			const $ = $$<CC>();
			next = _next({ $: $ });
		} else {
			next = _next;
		}

		if (next.length === 0) {
			throw new Error(
				"At least one state must be provided when using multiple",
			);
		}

		for (const endState of this.endStates) {
			for (const nextState of next) {
				endState.addNext(nextState);
			}
		}
		return new Chain(this.startState, this.endStates, next.at(-1)!);
	}

	public connect<Keys extends IdsInContext[number], N extends IChainable>(
		ids: Array<Keys & AnyString>,
		_next: ChainableProvider<N, CC>,
	): Chain<AddIChainableToChainContext<N, CC>> {
		void this.checkCanAddNext();

		let next: IChainable;
		if (typeof _next === "function") {
			const $ = $$<CC>();
			next = _next({ $: $ });
		} else {
			next = _next;
		}

		const states = this.toList();

		for (const id of ids) {
			const state = states.find((s) => s.id === id);
			if (!state) {
				throw new Error(`State '${id}' does not exist`);
			}
			(state as INextable).addNext(next);
		}

		return new Chain(this.startState, next.endStates, next);
	}

	/**
	 * Get all nodes that this chain traverses
	 */
	public toList(): State[] {
		const visited = new Set<State>();
		const ret = new Set<State>();
		const queue = [this.startState];
		while (queue.length > 0) {
			const state = queue.splice(0, 1)[0]!;
			if (visited.has(state)) {
				continue;
			}
			visited.add(state);
			const outgoing = state.listOutgoing();
			queue.push(...outgoing);
			ret.add(state);
		}
		return Array.from(ret);
	}
}
