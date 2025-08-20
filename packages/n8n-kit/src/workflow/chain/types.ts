import type { State } from "./state";

/**
 * Interface for states that can have 'next' states
 */
export interface INextable {
	/*
	 * Add a next state to this state
	 */
	addNext(state: IChainable): void;
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
export interface IChainable<
	Id extends string = string,
	C extends IContext = IContext,
> extends Identifiable<Id> {
	/**
	 * The start state of this chainable
	 */
	readonly startState: State;

	/**
	 * The chainable end state(s) of this chainable
	 */
	readonly endStates: INextable[];

	/**
	 * @internal
	 * Trick TS to make sure that the context type is conserved
	 */
	readonly "~context": C;
}

export type IContext = Record<string, unknown>;
