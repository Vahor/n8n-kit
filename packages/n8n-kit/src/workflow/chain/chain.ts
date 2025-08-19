import type { State } from "./state";
import type {
	IChainable,
	IContext,
	INextable,
	MergeIChainableContext,
} from "./types";

export const NO_END_STATES: INextable[] = [] as const;

interface ChainContext {
	[nodeId: string]: Record<string, unknown>;
}

type AddIChainableToChainContext<
	N extends IChainable,
	CC extends ChainContext,
> = N extends IChainable<infer Id, infer C> ? { [k in Id]: C } & CC : CC;

/**
 * A collection of states to chain onto
 *
 * A Chain has a start and zero or more chainable ends. If there are
 * zero ends, calling next() on the Chain will fail.
 */
export class Chain<T extends ChainContext = {}> implements IChainable {
	/**
	 * Begin a new Chain from one chainable
	 */
	public static start<N1 extends IChainable>(state: N1) {
		return new Chain<AddIChainableToChainContext<N1, {}>>(
			state.startState,
			state.endStates,
			state,
		);
	}

	/**
	 * Make a Chain with the start from one chain and the ends from another
	 */
	public static sequence<N1 extends IChainable, N2 extends IChainable>(
		start: N1,
		next: N2,
	): Chain<MergeIChainableContext<N1, N2>> {
		return new Chain(start.startState, next.endStates, next);
	}

	/**
	 * Make a Chain with specific start and end states, and a last-added Chainable
	 */
	public static custom(
		startState: State,
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

	/**
	 * Continue normal execution with the given state
	 */
	public next<N extends IChainable>(
		next: N,
	): Chain<AddIChainableToChainContext<N, T>> {
		if (!this.endStates || this.endStates.length === 0) {
			throw new Error(
				`Cannot add to chain: last state in chain (${this.lastAdded.id}) does not allow it`,
			);
		}

		for (const endState of this.endStates) {
			endState.next(next);
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
