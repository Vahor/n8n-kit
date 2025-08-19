import type { Chain } from "./chain";
import type { State } from "./state";

/**
 * Interface for states that can have 'next' states
 */
export interface INextable {
	/**
	 * Go to the indicated state after this state
	 *
	 * @returns The chain of states built up
	 */
	next(state: IChainable): Chain;
}

export interface Identifiable<Id extends string = string> {
	/**
	 * Descriptive identifier for this element
	 */
	readonly id: Id;
}

/**
 * Interface for objects that can be used in a Chain
 */
export interface IChainable<Id extends string = string, C extends IContext = {}>
	extends Identifiable<Id> {
	/**
	 * The start state of this chainable
	 */
	readonly startState: State;

	/**
	 * The chainable end state(s) of this chainable
	 */
	readonly endStates: INextable[];
}

export type MergeIChainableContext<
	N1 extends IChainable,
	N2 extends IChainable,
> = (N1 extends IChainable<infer Id1, infer C1> ? { [k in Id1]: C1 } : {}) &
	(N2 extends IChainable<infer Id2, infer C2> ? { [k in Id2]: C2 } : {});

export type IContext = Record<string, unknown>;
