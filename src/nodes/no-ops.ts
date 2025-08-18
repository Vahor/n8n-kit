import { Node } from "./node";

export class NoOp extends Node {
	protected type = "n8n-nodes-base.noOp";
	protected typeVersion = 1;

	getParameters() {
		return {};
	}
}
