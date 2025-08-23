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
	width: 110,
	height: 110,
};

export type NodeProps = {
	name?: string;
};

export abstract class BaseNode<
	LiteralId extends string = string,
	T extends IContext = never,
> extends State<LiteralId, T> {
	protected workflowParent?: Workflow;

	protected abstract readonly type: string;
	protected abstract typeVersion: number;

	public name?: string;
	public position?: NodePosition;
	public size: NodeSize = DEFAULT_NODE_SIZE;

	public groupIds: string[] = [];

	abstract getParameters(): object;
	public getCredentials():
		| Credentials<any>
		| Array<Credentials<any>>
		| undefined {
		return undefined;
	}

	constructor(id: LiteralId, props?: NodeProps) {
		super(id);
		this.name = props?.name;
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

	public getName() {
		return this.name ?? this.id;
	}

	private credentialsToNode() {
		let credentials = this.getCredentials();
		if (!credentials) return undefined;
		if (!Array.isArray(credentials)) credentials = [credentials];
		return Object.fromEntries(
			credentials.map((cred) => [cred.name, { id: cred.n8nCredentialsId }]),
		);
	}

	toNode() {
		// Often getParameters() returns this.props. So we want to remove the props from the parameters
		const { name: _, ...rest } = this.getParameters() as Record<string, any>;
		return {
			id: this.id,
			name: this.getName(),
			type: this.type,
			position: this.position,
			typeVersion: this.typeVersion,
			parameters: rest,
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
