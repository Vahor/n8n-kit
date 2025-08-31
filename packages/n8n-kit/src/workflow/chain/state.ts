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
	/**
	 * @internal
	 */
	"~context": T = undefined as any;

	/**
	 * Unique identifier for this state
	 */
	public readonly id: LiteralId;

	/**
	 * @internal
	 */
	public readonly startState: State;

	/**
	 * @internal
	 */
	public abstract readonly endStates: INextable[];

	/**
	 * @internal
	 */
	protected readonly nextStates: IChainable[] = [];

	/**
	 * Connection configuration options for connected state
	 * keyed by state ID
	 */
	protected connectionsOptions: Record<string, ConnectionOptions> = {};

	public constructor(id: LiteralId) {
		checkInternalIdentifier(id);
		this.id = id;
		this.startState = this;
	}

	/** @internal */
	public "~getConnectionOptions"(id: string): Required<ConnectionOptions> {
		const connectionOptions = this.connectionsOptions[id];
		return {
			from: connectionOptions?.from ?? 0,
			to: connectionOptions?.to ?? 0,
			type: connectionOptions?.type ?? "main",
			direction: connectionOptions?.direction ?? "output",
		};
	}

	/**
	 * Determines if this state can accept input from another state
	 * @param _fromState - The state that wants to connect to this state
	 * @param _withConnectionOptions - Optional connection configuration
	 * @returns True if this state can accept the input, false otherwise
	 */
	public canTakeInput(
		_fromState: IChainable,
		_withConnectionOptions?: ConnectionOptions,
	) {
		return true;
	}

	/** @internal */
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

	/**
	 * Returns all states that are connected as next states from this state
	 * @returns Array of chainable states that follow this state
	 */
	public listOutgoing(): IChainable[] {
		const ret: IChainable[] = [];
		for (const state of this.nextStates.values()) {
			ret.push(state);
		}
		return ret;
	}
}
