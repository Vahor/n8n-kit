import { checkInternalIdentifier } from "../../utils/slugify";
import type {
	ConnectionOptions,
	IChainable,
	IContext,
	INextable,
} from "./types";

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

	// from id to <string, index>. If missing 0
	private readonly connectionsOptions: Record<string, ConnectionOptions> = {};

	public constructor(id: LiteralId) {
		checkInternalIdentifier(id);
		this.id = id;
		this.startState = this;
	}

	public "~getConnectionOptions"(id: string): Required<ConnectionOptions> {
		const connectionOptions = this.connectionsOptions[id];
		return {
			from: connectionOptions?.from ?? 0,
			to: connectionOptions?.to ?? 0,
		};
	}

	public addNext(state: State, connectionOptions?: ConnectionOptions) {
		this.nextStates.push(state);
		state.addIncoming(this);

		if (connectionOptions) {
			this.connectionsOptions[state.id] = connectionOptions;
		}
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
