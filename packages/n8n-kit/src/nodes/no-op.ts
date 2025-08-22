import type { NoOpNodeParameters } from "generated/nodes/NoOp";
import { Node, type NodeProps } from "./node";

export interface NoOpProps extends NoOpNodeParameters, NodeProps {}

export class NoOp<L extends string> extends Node<L> {
	protected type = "n8n-nodes-base.noOp" as const;
	protected typeVersion = 1;

	constructor(id: L, props?: NoOpProps) {
		super(id, props);
	}

	getParameters() {
		return {};
	}
}
