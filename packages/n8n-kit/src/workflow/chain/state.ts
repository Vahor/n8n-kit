import { isGroup } from "../../symbols";
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

	private readonly nextStates: IChainable[] = [];

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
			type: connectionOptions?.type ?? "main",
			direction: connectionOptions?.direction ?? "output",
		};
	}

	public addNext(state: IChainable, connectionOptions?: ConnectionOptions) {
		if (isGroup(state)) {
			const nodes = state.chain.toList();
			if (nodes.length === 0) {
				throw new Error("Group must have at least one node");
			}
			// Add the group just for the sticky layout
			this.addNext(nodes[0]!, connectionOptions);
			return;
		}

		this.nextStates.push(state);

		if (connectionOptions) {
			this.connectionsOptions[state.id] = connectionOptions;
		}
	}

	public listOutgoing(): IChainable[] {
		const ret: IChainable[] = [];
		for (const state of this.nextStates.values()) {
			ret.push(state);
		}
		return ret;
	}
}
