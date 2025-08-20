// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Workable/WorkableTrigger.node.ts' node

export const name = "workableTrigger" as const;
export const description = "Starts the workflow when Workable events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Workable Trigger"} as const;
export const credentials = [{"name":"workableApi","required":true}] as const

/**
 * Starts the workflow when Workable events occur
 */
export interface WorkableTriggerNodeParameters {

    /**
     */
    readonly triggerOn: "candidateCreated" | "candidateMoved";

    /**
     * Default: {}
     */
    readonly filters?: { "job"?: string, "stage"?: string };


}

