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
	_C extends IContext = never,
> extends Identifiable<Id> {
	/**
	 * The start state of this chainable
	 */
	readonly startState: State;

	/**
	 * The chainable end state(s) of this chainable
	 */
	readonly endStates: INextable[];
}

export type IContext = Record<string, unknown>;
