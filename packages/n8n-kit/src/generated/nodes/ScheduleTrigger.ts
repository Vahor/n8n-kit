// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Schedule/ScheduleTrigger.node.ts' node

export const description = "Triggers the workflow on a given schedule" as const;
export const type = "n8n-nodes-base.scheduleTrigger" as const;
export const version = 1.2 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ScheduleTriggerNodeParameters {
    /**
     * Default: {"interval":[{"field":"days"}]}
     * Type options: {"multipleValues":true}
     */
    readonly rule?: { "interval": any };

}
