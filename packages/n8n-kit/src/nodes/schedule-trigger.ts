import { Node } from "./node";

export class ScheduleTrigger extends Node<string> {
	protected override type = "n8n-nodes-base.scheduleTrigger";
	protected override typeVersion = 1.2;

	override getParameters() {
		return {};
	}
}
