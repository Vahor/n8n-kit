import { validateIdentifier } from "../../utils/slugify";
import type { IChainable, IContext, INextable } from "./types";

export abstract class State<
	LiteralId extends string = string,
	T extends IContext = IContext,
> implements IChainable<LiteralId, T>, INextable
{
	"~context": T = undefined as any;

	public readonly id: LiteralId;

	public readonly startState: State;
	public abstract readonly endStates: INextable[];

	private readonly incomingStates: State[] = [];
	private readonly nextStates: State[] = [];

	public constructor(id: LiteralId) {
		this.id = validateIdentifier(id);
		this.startState = this;
	}

	public addNext(state: State) {
		this.nextStates.push(state);
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
