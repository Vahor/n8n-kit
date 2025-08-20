// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/ExecuteWorkflowTrigger/ExecuteWorkflowTrigger.node.js' node

export const name = "executeWorkflowTrigger" as const;
export const description = "Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows." as const;
export const version = 1 as const;
export const defaults = {"name":"Execute Workflow Trigger","color":"#ff6d5a"} as const;

/**
 * Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows.
 */
export interface ExecuteWorkflowTriggerNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Default: "worklfow_call"
     */
    readonly events?: any;


}

