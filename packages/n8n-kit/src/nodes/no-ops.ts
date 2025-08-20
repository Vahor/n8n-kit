import { Node, type NodeProps } from "./node";

type NoOpBaseProps = {};

export interface NoOpProps extends NoOpBaseProps, NodeProps {}

export class NoOp<L extends string> extends Node<L, never> {
	protected type = "n8n-nodes-base.noOp";
	protected typeVersion = 1;

	constructor(id: L, props?: NoOpProps) {
		super(id, props);
	}

	getParameters() {
		return {};
	}
}
