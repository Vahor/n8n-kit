// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CrowdDev/CrowdDevTrigger.node.ts' node

export const description = "Starts the workflow when crowd.dev events occur." as const;
export const type = "n8n-nodes-base.crowdDevTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"crowdDevApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface CrowdDevTriggerNodeParameters {

    /**
     * What will trigger an automation
     * Default: "new_activity"
     */
    readonly trigger?: "new_activity" | "new_member";


}

