import { Node } from "./node";

export class NoOp<L extends string> extends Node<L, { hello: string }> {
	protected type = "n8n-nodes-base.noOp";
	protected typeVersion = 1;

	constructor(id: L) {
		super(id);
	}

	getParameters() {
		return {};
	}
}
