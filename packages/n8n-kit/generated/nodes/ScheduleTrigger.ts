// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Schedule/ScheduleTrigger.node.ts' node

export const name = "scheduleTrigger" as const;
export const description = "Triggers the workflow on a given schedule" as const;
export const version = 1.2 as const;
export const defaults = {"name":"Schedule Trigger","color":"#31C49F"} as const;

/**
 * Triggers the workflow on a given schedule
 */
export interface ScheduleTriggerNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Default: {"interval":[{"field":"days"}]}
     * Type options: {"multipleValues":true}
     */
    readonly rule?: { "interval": any };


}

