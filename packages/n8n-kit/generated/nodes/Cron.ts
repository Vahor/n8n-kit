// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Cron/Cron.node.js' node

export const name = "cron" as const;
export const description = "Triggers the workflow at a specific time" as const;
export const version = 1 as const;
export const defaults = {"name":"Cron","color":"#29a568"} as const;

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

