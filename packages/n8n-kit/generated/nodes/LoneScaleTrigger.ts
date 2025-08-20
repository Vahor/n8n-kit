// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/LoneScale/LoneScaleTrigger.node.ts' node

export const name = "loneScaleTrigger" as const;
export const description = "Trigger LoneScale Workflow" as const;
export const version = 1 as const;
export const defaults = {"name":"LoneScale Trigger"} as const;
export const credentials = [{"name":"loneScaleApi","required":true}] as const

/**
 * Trigger LoneScale Workflow
 */
export interface LoneScaleTriggerNodeParameters {

    /**
     * Select one workflow. Choose from the list
     * Type options: {"loadOptionsMethod":"getWorkflows"}
     */
    readonly workflow: string;


}

