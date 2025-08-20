import type { Rule } from "n8n-nodes-base/nodes/Schedule/SchedulerInterface";
import { Node, type NodeProps } from "./node";

interface ScheduleTriggerBaseProps extends Rule {}

export interface ScheduleTriggerProps
	extends ScheduleTriggerBaseProps,
		NodeProps {}

export class ScheduleTrigger<L extends string> extends Node<
	L,
	{
		timestamp: string;
		"Readable date": string;
		"Readable time": string;
		"Day of week": string;
		Year: string;
		Month: string;
		Hour: string;
		Minute: string;
		Second: string;
		Timezone: string;
	}
> {
	protected override type = "n8n-nodes-base.scheduleTrigger";
	protected override typeVersion = 1.2;

	constructor(
		id: L,
		private readonly props: ScheduleTriggerProps,
	) {
		super(id, props);
	}

	override getParameters() {
		return {
			rule: this.props,
		};
	}
}
