import type { IChainable, INextable } from "./types";

interface ChoiceTransition {
	next: State;
}

export abstract class State implements IChainable {
	public readonly id: string;

	public readonly startState: State;
	public abstract readonly endStates: INextable[];

	public readonly choices: ChoiceTransition[] = [];

	private readonly incomingStates: State[] = [];

	private _next?: State;

	public constructor(id: string) {
		this.id = id;
		this.startState = this;
	}

	public setNext(state: State) {
		if (this._next) {
			throw new Error(`State ${this.id} already has a next state`);
		}
		this._next = state;
		state.addIncoming(this);
	}

	public addChoice(next: State) {
		this.choices.push({ next });
	}

	private addIncoming(source: State) {
		if (this.incomingStates.includes(source)) {
			return;
		}
		this.incomingStates.push(source);
	}

	/**
	 * Get the next state in the chain
	 */
	public get nextState(): State | undefined {
		return this._next;
	}

	public listOutgoing(): State[] {
		const ret: State[] = [];
		if (this._next) {
			ret.push(this._next);
		}
		for (const c of this.choices) {
			ret.push(c.next);
		}
		return ret;
	}
}
