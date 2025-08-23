import type { Credentials } from "../credentials";
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
};

export abstract class BaseNode<
	LiteralId extends string = string,
	T extends IContext = never,
> extends State<LiteralId, T> {
	protected workflowParent?: Workflow;

	protected abstract readonly type: string;
	protected abstract typeVersion: number;

	public position?: NodePosition;
	public size: NodeSize = DEFAULT_NODE_SIZE;

	public groupIds: string[] = [];

	public readonly props?: NodeProps;

	public getParameters() {
		return this.props?.parameters ?? {};
	}

	public getCredentials(): Array<Credentials<any> | undefined> | undefined {
		return undefined;
	}

	constructor(id: LiteralId, props?: NodeProps) {
		super(id);
		this.props = props;
	}

	get label() {
		return this.props?.label;
	}

	public "~setParent"(parent: Workflow) {
		if (this.workflowParent) {
			if (this.workflowParent.id === parent.id) {
				return;
			}
			throw new Error(`Node '${this.getPath()}' already has a parent.`);
		}
		this.workflowParent = parent;
	}

	public "~setGroup"(groupId: string) {
		if (this.groupIds.includes(groupId)) return;
		this.groupIds.push(groupId);
	}

	public "~validate"(): void {}

	public getPath() {
		const parentId = this.workflowParent?.id ?? "none";
		return `${parentId}/${this.id}`;
	}

	public getLabel() {
		return this.label ?? this.id;
	}

	private credentialsToNode() {
		const credentials = this.getCredentials();
		if (!credentials) return undefined;
		return Object.fromEntries(
			credentials
				.filter(Boolean)
				.map((cred) => [cred!.type, { id: cred!.n8nCredentialsId }]),
		);
	}

	toNode() {
		return {
			id: this.id,
			name: this.getLabel(),
			type: this.type,
			position: this.position,
			typeVersion: this.typeVersion,
			parameters: this.getParameters(),
			credentials: this.credentialsToNode(),
		};
	}
}

export abstract class Node<
	LiteralId extends string,
	T extends IContext = never,
> extends BaseNode<LiteralId, T> {
	public readonly endStates: INextable[];

	constructor(id: LiteralId, props?: NodeProps) {
		super(id, props);
		this.endStates = [this];
	}
}
