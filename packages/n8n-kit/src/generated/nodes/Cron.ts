// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cron/Cron.node.ts' node

export const name = "cron" as const;
export const description = "Triggers the workflow at a specific time" as const;
export const version = 1 as const;

/**
 * Triggers the workflow at a specific time
 */
export interface CronNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Triggers for the workflow
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Time"}
     */
    readonly triggerTimes?: { "item": any };


}

