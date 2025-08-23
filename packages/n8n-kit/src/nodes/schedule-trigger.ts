import type { Rule } from "n8n-nodes-base/nodes/Schedule/SchedulerInterface";
import { type, version } from "../generated/nodes/ScheduleTrigger";
import { Node, type NodeProps } from "./node";

export interface ScheduleTriggerProps extends NodeProps {
	parameters: {
		rule: Rule;
	};
}

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
	protected override type = type;
	protected override typeVersion = version;

	constructor(
		id: L,
		override props: ScheduleTriggerProps,
	) {
		super(id, props);
	}
}
