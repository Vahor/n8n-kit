import clone from "lodash.clonedeep";
import type { Credentials } from "../credentials";
import { NODE_SYMBOL } from "../symbols";
import { checkInternalIdentifier } from "../utils/slugify";
import type { Workflow } from "../workflow";
import { State } from "../workflow/chain/state";
import type { IContext, INextable } from "../workflow/chain/types";

/**
 * Position of the node in the n8n workflow editor.
 */
export type NodePosition = [x: number, y: number];

/**
 * Size of the node in the n8n workflow editor.
 * @default DEFAULT_NODE_SIZE
 */
export interface NodeSize {
	width?: number;
	height?: number;
}

export const DEFAULT_NODE_SIZE: Required<NodeSize> = {
	width: 120,
	height: 120,
};

export type NodeProps = {
	label?: string;
	parameters?: unknown;
	position?: NodePosition;
	/**
	 * If true, the node won't run but subsequent nodes WILL be executed
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * If active, the node tries to execute again when it fails
	 * @default false
	 */
	retryOnFail?: boolean;
	/**
	 * Number of times to attempt to execute the node before failing the execution
	 * Enabled if `retryOnFail` is true
	 * @default 3
	 */
	maxTries?: number;
	/**
	 * If active, the node executes only once, with data from the first item it receives
	 * @default false
	 */
	executeOnce?: boolean;
	/*
	 * If active, will output a single, empty item when the output would have been empty. Use to prevent the workflow finishing on this node.
	 * @default false
	 */
	alwaysOutputData?: boolean;

	/**
	 * Optional note to save with the node
	 * @default undefined
	 */
	notes?: string;
	/*
	 * If active, the note above will display in the flow as a subtitle
	 * @default false
	 */
	notesInFlow?: boolean;
	/**
	 * Action to take when the node execution fails
	 * When undefined, an error will stop the workflow execution
	 * @default undefined
	 */
	onError?: "continueRegularOutput" | "continueErrorOutput";
};

export abstract class Node<
	LiteralId extends string = string,
	C extends IContext = never,
> extends State<LiteralId, C> {
	protected workflowParent?: Workflow;

	/** @internal */
	static readonly [NODE_SYMBOL] = true;
	/** @internal */
	readonly [NODE_SYMBOL] = true;

	protected abstract readonly type: string;
	protected abstract typeVersion: number;

	public position?: NodePosition;
	public size: NodeSize = DEFAULT_NODE_SIZE;

	/** @internal */
	public groupIds: string[] = [];

	public readonly props?: NodeProps;

	readonly endStates: INextable[];

	public async getParameters() {
		const p = this.props?.parameters;
		if (p == null) return undefined;
		if (Object.keys(p).length === 0) return undefined;
		return p;
	}

	public getCredentials(): Array<Credentials<any> | undefined> | undefined {
		return undefined;
	}

	constructor(id: LiteralId, props?: NodeProps) {
		super(id);
		this.props = props;
		this.position = props?.position;
		this.endStates = [this];
	}

	get label() {
		return this.props?.label;
	}

	/** @internal */
	public "~setParent"(parent: Workflow) {
		if (this.workflowParent) {
			if (this.workflowParent.id === parent.id) {
				return;
			}
			throw new Error(`Node '${this.getPath()}' already has a parent.`);
		}
		this.workflowParent = parent;
	}

	/** @internal */
	public "~setGroup"(groupId: string) {
		if (this.groupIds.includes(groupId)) return;
		this.groupIds.push(groupId);
	}

	/** @internal */
	public "~validate"(): void {}

	public getPath() {
		const parentId = this.workflowParent?.id ?? "none";
		return `${parentId}/${this.id}`;
	}

	public getLabel() {
		return this.label ?? this.id;
	}

	private credentialsToNode(): { [type: string]: { id: string } } | undefined {
		const credentials = this.getCredentials();
		if (!credentials) return undefined;
		if (credentials.filter(Boolean).length === 0) return undefined;
		return Object.fromEntries(
			credentials
				.filter(Boolean)
				.map((cred) => [cred!.type, { id: cred!.n8nCredentialsId }]),
		);
	}

	public clone<Id extends string>(
		id: Id,
		props?: NodeProps,
		cloneOptions?: { preserveChainConnections?: boolean },
	): Omit<this, "id"> & Node<Id, C> {
		checkInternalIdentifier(id);
		const newInstance = clone(this) as unknown as Node<Id, C>;
		if (props) {
			// @ts-expect-error: readonly
			newInstance.props = {
				...newInstance.props,
				...props,
			};
		}

		// @ts-expect-error: readonly
		newInstance.id = id;
		// @ts-expect-error: readonly
		newInstance.startState = newInstance;
		const indexOfSelf = newInstance.endStates.indexOf(this);
		if (indexOfSelf !== -1) newInstance.endStates[indexOfSelf] = newInstance;

		if (!cloneOptions?.preserveChainConnections) {
			newInstance.nextStates.length = 0;
			newInstance.nextStates.push(newInstance);
			newInstance.connectionsOptions = {};
		}

		return newInstance as any;
	}

	async toNode() {
		return {
			id: this.id,
			name: this.getLabel(),
			type: this.type,
			position: this.position,
			typeVersion: this.typeVersion,
			parameters: await this.getParameters(),
			credentials: this.credentialsToNode(),
			//
			disabled: this.props?.disabled ?? undefined,
			retryOnFail: this.props?.retryOnFail ?? undefined,
			maxTries: this.props?.maxTries ?? undefined,
			executeOnce: this.props?.executeOnce ?? undefined,
			alwaysOutputData: this.props?.alwaysOutputData ?? undefined,
			notes: this.props?.notes ?? undefined,
			notesInFlow: this.props?.notesInFlow ?? undefined,
			onError: this.props?.onError ?? undefined,
		};
	}
}
