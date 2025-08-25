// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Schedule/ScheduleTrigger.node.ts' node

export const description = "Triggers the workflow on a given schedule" as const;
export const type = "n8n-nodes-base.scheduleTrigger" as const;
export const version = 1.2 as const;
export const inputs = {} as const;
export const outputs = { main: "main" } as const;

export interface ScheduleTriggerNodeParameters {
	/**
	 * Default: {"interval":[{"field":"days"}]}
	 * Type options: {"multipleValues":true}
	 */
	readonly rule?: {
		interval: {
			field?:
				| "seconds"
				| "minutes"
				| "hours"
				| "days"
				| "weeks"
				| "months"
				| "cronExpression";
			secondsInterval?: number;
			minutesInterval?: number;
			hoursInterval?: number;
			daysInterval?: number;
			weeksInterval?: number;
			monthsInterval?: number;
			triggerAtDayOfMonth?: number;
			triggerAtDay?: ("1" | "2" | "3" | "4" | "5" | "6" | "0")[];
			triggerAtHour?:
				| 0
				| 1
				| 2
				| 3
				| 4
				| 5
				| 6
				| 7
				| 8
				| 9
				| 10
				| 11
				| 12
				| 13
				| 14
				| 15
				| 16
				| 17
				| 18
				| 19
				| 20
				| 21
				| 22
				| 23;
			triggerAtMinute?: number;
			notice?: string;
			expression?: string;
		};
	};
}
