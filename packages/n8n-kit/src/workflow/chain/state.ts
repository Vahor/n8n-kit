import { isGroup } from "../../symbols";
import { checkInternalIdentifier } from "../../utils/slugify";
import type { Chain } from "./chain";
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

	protected readonly nextStates: IChainable[] = [];

	// from id to <string, index>. If missing 0
	protected connectionsOptions: Record<string, ConnectionOptions> = {};

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

	public canTakeInput(
		_fromState: IChainable,
		_withConnectionOptions?: ConnectionOptions,
	) {
		return true;
	}

	public addNext(state: IChainable, connectionOptions?: ConnectionOptions) {
		if (!this.canTakeInput(state, connectionOptions)) {
			throw new Error(
				`Cannot add '${state.id}' to '${this.id}' because it cannot take more input with ${JSON.stringify(
					connectionOptions,
				)}`,
			);
		}

		if (isGroup(state)) {
			const nodes = state.endStates;
			// TODO: we should probably add checks
			const firstNode = nodes.at(0)! as unknown as IChainable;
			this.addNext(firstNode, connectionOptions);
			return;
		}

		if (state.id === "chain") {
			const chain = state as unknown as Chain;
			const firstNode = chain.toList().at(0)!;
			this.addNext(firstNode, connectionOptions);
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
