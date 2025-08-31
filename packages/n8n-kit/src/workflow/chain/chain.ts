import type { If } from "../../nodes";
import type {
	ErrorMessage,
	IsAny,
	IsNever,
	IsUnknown,
	Prettify,
} from "../../utils/types";
import type { Group } from "../group";
import { $$, type ExpressionBuilderProvider } from "./expression-builder";
import { State } from "./state";
import type { ConnectionOptions, IChainable, INextable } from "./types";

/** @hidden */
export const NO_END_STATES: INextable[] = [] as const;

type PREVIOUS_CONTENT = "json";

/** @hidden */
export type ChainContext = {
	[nodeId: string]: any;
};

type IgnoreContext<T> = IsNever<T> extends true
	? true
	: IsUnknown<T> extends true
		? true
		: IsAny<T> extends true
			? true
			: false;

/** @hidden */
export type AddIChainableToChainContext<
	N,
	CC extends ChainContext,
	WithPrevious = true,
> = Prettify<
	N extends Chain<infer C_CC, any>
		? IgnoreContext<C_CC> extends true
			? Omit<CC, PREVIOUS_CONTENT>
			: Omit<CC, PREVIOUS_CONTENT> & C_CC
		: N extends Group<infer _, infer G_Chain_CC, any>
			? IgnoreContext<G_Chain_CC> extends true
				? Omit<CC, PREVIOUS_CONTENT>
				: Omit<CC, PREVIOUS_CONTENT> & G_Chain_CC
			: N extends If<any, any, any, infer I_Chain_CC, any>
				? IgnoreContext<I_Chain_CC> extends true
					? Omit<CC, PREVIOUS_CONTENT>
					: Omit<CC & I_Chain_CC, PREVIOUS_CONTENT>
				: N extends IChainable<infer Id, infer C>
					? IgnoreContext<C> extends true
						? Omit<CC, PREVIOUS_CONTENT>
						: { [k in Id]: C } & Omit<CC, PREVIOUS_CONTENT> & {
									[k in PREVIOUS_CONTENT as WithPrevious extends true
										? k
										: never]: C;
								}
					: CC
>;

/** @hidden */
export type AddNodeIdToIds<N, Ids extends readonly string[]> = N extends Group<
	infer _,
	any,
	infer G_Chain_Ids
>
	? [...Ids, ...G_Chain_Ids]
	: N extends If<any, any, any, any, infer G_Chain_Ids>
		? [...Ids, ...G_Chain_Ids]
		: N extends Chain<any, infer G_Chain_Ids>
			? [...Ids, ...G_Chain_Ids]
			: N extends IChainable<infer Id>
				? [...Ids, Id]
				: Ids;

export type ExtractChainContext<C> = C extends Chain<infer CC> ? CC : {};

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
	EndsInMultiple = false,
> implements IChainable<"chain", CC>
{
	"~context": CC = undefined as any;
	readonly id = "chain";

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
		_next: EndsInMultiple extends true
			? ErrorMessage<"Cannot use next() after multiple(), use connect() instead">
			: ChainableProvider<N, CC>,
		connectionOptions?: ConnectionOptions,
	): Chain<
		AddIChainableToChainContext<N, CC>,
		AddNodeIdToIds<N, IdsInContext>
	> {
		void this.checkCanAddNext();
		if (typeof _next === "string") {
			// that's only a type error. We are not enforcing it at runtime
			throw new Error(_next);
		}

		let next: IChainable;
		if (typeof _next === "function") {
			const $ = $$<CC>();
			next = _next({ $: $ });
		} else {
			next = _next;
		}

		for (const endState of this.endStates) {
			endState.addNext(next, connectionOptions);
		}

		return new Chain(this.startState, next.endStates, next);
	}

	public multiple<N extends IChainable>(
		_next: MultipleChainableProvider<N, CC>,
	): Chain<
		AddIChainableToChainContext<N, CC, false>,
		AddNodeIdToIds<N, IdsInContext>,
		true
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

	public connect<
		Keys extends IdsInContext[number],
		Ids extends Array<Keys>,
		N extends IChainable,
	>(
		ids: Ids,
		_next: ChainableProvider<N, CC>,
		connectionOptions?: { [k in Ids[number]]?: Pick<ConnectionOptions, "to"> },
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
			const to = connectionOptions?.[id]?.to ?? 0;
			(state as INextable).addNext(next, { to: to });
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
			for (const outgoingState of outgoing) {
				if (outgoingState instanceof Chain) {
					queue.push(...outgoingState.toList());
				} else if (outgoingState instanceof State) {
					queue.push(outgoingState);
				}
			}
			ret.add(state);
		}
		return Array.from(ret);
	}
}
