// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Workable/WorkableTrigger.node.ts' node

export const description = "Starts the workflow when Workable events occur" as const;
export const type = "n8n-nodes-base.workableTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"workableApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface WorkableTriggerNodeParameters {
    readonly triggerOn?: "candidateCreated" | "candidateMoved";

    /**
     * Default: {}
     */
    readonly filters?: { "job"?: string, "stage"?: string };

}
