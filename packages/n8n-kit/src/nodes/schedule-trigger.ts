import type { CronExpression } from "n8n-workflow";
import { type, version } from "../generated/nodes/ScheduleTrigger";
import { Node, type NodeProps } from "./node";

export type ScheduleInterval =
	| {
			field: "cronExpression";
			expression: CronExpression;
	  }
	| {
			field: "seconds";
			secondsInterval: number;
	  }
	| {
			field: "minutes";
			minutesInterval: number;
	  }
	| {
			field: "hours";
			hoursInterval: number;
			triggerAtMinute?: number;
	  }
	| {
			field: "days";
			daysInterval: number;
			triggerAtHour?: number;
			triggerAtMinute?: number;
	  }
	| {
			field: "weeks";
			weeksInterval: number;
			triggerAtDay: number[];
			triggerAtHour?: number;
			triggerAtMinute?: number;
	  }
	| {
			field: "months";
			monthsInterval: number;
			triggerAtDayOfMonth?: number;
			triggerAtHour?: number;
			triggerAtMinute?: number;
	  };

export interface Rule {
	interval: ScheduleInterval[];
}

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
