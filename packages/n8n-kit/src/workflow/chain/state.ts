import type { IChainable, INextable } from "./types";

export abstract class State implements IChainable {
	public readonly id: string;

	public readonly startState: State;
	public abstract readonly endStates: INextable[];

	private readonly incomingStates: State[] = [];
	private readonly nextStates: Map<number, State> = new Map(); // index -> state

	public constructor(id: string) {
		this.id = id;
		this.startState = this;
	}

	private setNext(index: number, state: State, override: boolean = false) {
		const current = this.nextStates.get(index);
		if (current && !override) {
			throw new Error(
				`Cannot override next state at index ${index}. Use \`override\` to override.`,
			);
		}
		this.nextStates.set(index, state);
	}

	public addNext(
		state: State,
		index: number | undefined = undefined,
		override: boolean = false,
	) {
		this.setNext(index ?? this.nextStates.size, state, override);
		state.addIncoming(this);
	}

	private addIncoming(source: State) {
		if (this.incomingStates.includes(source)) {
			return;
		}
		this.incomingStates.push(source);
	}

	public listOutgoing(): State[] {
		const ret: State[] = [];
		for (const state of this.nextStates.values()) {
			ret.push(state);
		}
		return ret;
	}
}
