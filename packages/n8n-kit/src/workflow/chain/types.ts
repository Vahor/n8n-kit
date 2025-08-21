import type { State } from "./state";

export interface ConnectionOptions {
	/**
	 * From which input to connect
	 * Example: If nodes have a true/false output, true is 0, false is 1
	 */
	from?: number;

	/**
	 * To which output to connect
	 * Example: Merge nodes have two inputs, top is 0, bottom is 1
	 */
	to?: number;
}

/**
 * Interface for states that can have 'next' states
 */
export interface INextable {
	/*
	 * Add a next state to this state
	 */
	addNext(state: IChainable, connectionOptions?: ConnectionOptions): void;
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

export type IContext = any;
