// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/TheHive/TheHiveTrigger.node.ts' node

export const description = "Starts the workflow when TheHive events occur" as const;
export const type = "n8n-nodes-base.theHiveTrigger" as const;
export const version = 2 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface TheHiveTriggerNodeParameters {
    /**
     * Events types
     * Default: []
     */
    readonly events?: ("*" | "alert_create" | "alert_delete" | "alert_update" | "case_create" | "case_delete" | "case_update" | "case_task_log_create" | "case_task_log_delete" | "case_task_log_update" | "case_artifact_create" | "case_artifact_delete" | "case_artifact_update" | "case_task_create" | "case_task_delete" | "case_task_update")[] | ("*" | "alert_create" | "alert_delete" | "alert_update" | "case_create" | "case_delete" | "case_update" | "case_task_log_create" | "case_task_log_delete" | "case_task_log_update" | "case_artifact_create" | "case_artifact_delete" | "case_artifact_update" | "case_task_create" | "case_task_update")[];

}
