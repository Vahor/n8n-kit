import { Chain } from "../workflow/chain/chain";
import { State } from "../workflow/chain/state";
import type { IChainable, INextable } from "../workflow/chain/types";

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

export abstract class BaseNode extends State {
	public readonly name?: string;

	protected abstract type: string;
	protected abstract typeVersion: number;
	public position?: NodePosition;
	public size: NodeSize = DEFAULT_NODE_SIZE;

	abstract getParameters(): Record<string, unknown>;

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

export abstract class Node extends BaseNode implements INextable {
	public readonly endStates: INextable[];

	constructor(id: string) {
		super(id);
		this.endStates = [this];
	}

	public next(next: IChainable): Chain {
		super.setNext(next.startState);
		return Chain.sequence(this, next);
	}
}
