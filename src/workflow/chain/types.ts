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

export interface Identifiable {
	/**
	 * Descriptive identifier for this element
	 */
	readonly id: string;
}

/**
 * Interface for objects that can be used in a Chain
 */
export interface IChainable extends Identifiable {
	/**
	 * The start state of this chainable
	 */
	readonly startState: State;

	/**
	 * The chainable end state(s) of this chainable
	 */
	readonly endStates: INextable[];
}
