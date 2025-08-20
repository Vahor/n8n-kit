import type { Workflow } from "../workflow";
import { State } from "../workflow/chain/state";
import type { IContext, INextable } from "../workflow/chain/types";

/**
 * Position of the node in the n8n workflow editor.
 */
export type NodePosition = [x: number, y: number];

/**
 * Size of the node in the n8n workflow editor.
 * Only used for the generation of the graph.
 */
export interface NodeSize {
	width: number;
	height: number;
}

export const DEFAULT_NODE_SIZE: NodeSize = {
	width: 100,
	height: 100,
};

export interface NodeProps {
	name?: string;
}

export abstract class BaseNode<
	LiteralId extends string = string,
	T extends IContext = never,
> extends State<LiteralId, T> {
	public name?: string;

	protected workflowParent?: Workflow;

	protected abstract type: string;
	protected abstract typeVersion: number;

	public position?: NodePosition;
	public size: NodeSize = DEFAULT_NODE_SIZE;

	abstract getParameters(): object;

	constructor(id: LiteralId, props?: NodeProps) {
		super(id);
		this.name = props?.name;
	}

	public "~setParent"(parent: Workflow) {
		if (this.workflowParent) {
			throw new Error(`Node '${this.getPath()}' already has a parent.`);
		}
		this.workflowParent = parent;
	}

	public "~validate"(): void {}

	public getPath() {
		const parentId = this.workflowParent?.id ?? "none";
		return `${parentId}/${this.id}`;
	}

	toNode() {
		return {
			id: this.id,
			name: this.name ?? this.id,
			type: this.type,
			position: this.position,
			typeVersion: this.typeVersion,
			parameters: this.getParameters(),
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
