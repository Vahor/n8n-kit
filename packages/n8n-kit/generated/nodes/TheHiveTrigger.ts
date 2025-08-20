// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/TheHive/TheHiveTrigger.node.ts' node

export const name = "theHiveTrigger" as const;
export const description = "Starts the workflow when TheHive events occur" as const;
export const version = 2 as const;
export const defaults = {"name":"TheHive Trigger"} as const;

/**
 * Starts the workflow when TheHive events occur
 */
export interface TheHiveTriggerNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Events types
     * Default: []
     */
    readonly events?: ("*" | "alert_create" | "alert_delete" | "alert_update" | "case_create" | "case_delete" | "case_update" | "case_task_log_create" | "case_task_log_delete" | "case_task_log_update" | "case_artifact_create" | "case_artifact_delete" | "case_artifact_update" | "case_task_create" | "case_task_delete" | "case_task_update")[];


}

