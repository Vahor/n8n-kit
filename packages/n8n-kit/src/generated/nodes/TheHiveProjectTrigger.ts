// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/TheHiveProject/TheHiveProjectTrigger.node.ts' node

export const description = "Starts the workflow when TheHive events occur" as const;
export const type = "n8n-nodes-base.theHiveProjectTrigger" as const;
export const version = 1 as const;
export const outputs = {"main":"main"} as const;

export interface TheHiveProjectTriggerNodeParameters {

    readonly notice?: string;

    /**
     * Events types
     * Default: []
     */
    readonly events?: ("*" | "alert_create" | "alert_delete" | "alert_update" | "case_create" | "case_delete" | "case_update" | "comment_create" | "comment_delete" | "comment_update" | "observable_create" | "observable_delete" | "observable_update" | "page_create" | "page_delete" | "page_update" | "task_create" | "task_update" | "log_create" | "log_delete" | "log_update")[];

    /**
     * Filter any incoming events based on their fields
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "values": any };

    /**
     * Default: {}
     */
    readonly options?: { "outputOnlyData"?: boolean };


}

