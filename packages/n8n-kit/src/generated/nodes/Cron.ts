// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cron/Cron.node.ts' node

export const description = "Triggers the workflow at a specific time" as const;
export const type = "n8n-nodes-base.cron" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface CronNodeParameters {
    /**
     * Triggers for the workflow
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Time"}
     */
    readonly triggerTimes?: { item: { mode?: "everyMinute" | "everyHour" | "everyDay" | "everyWeek" | "everyMonth" | "everyX" | "custom", hour?: number, minute?: number, dayOfMonth?: number, weekday?: "1" | "2" | "3" | "4" | "5" | "6" | "0", cronExpression?: string, value?: number, unit?: "minutes" | "hours" } };

}
