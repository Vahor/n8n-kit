// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ExecuteWorkflow/ExecuteWorkflowTrigger/ExecuteWorkflowTrigger.node.ts' node

export const name = "executeWorkflowTrigger" as const;
export const description = "Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows." as const;
export const version = 1.1 as const;
export const defaults = {"name":"When Executed by Another Workflow","color":"#ff6d5a"} as const;

/**
 * Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows.
 */
export interface ExecuteWorkflowTriggerNodeParameters {

    /**
     * Default: "worklfow_call"
     */
    readonly events?: any;

    /**
     */
    readonly notice?: string;

    /**
     */
    readonly outdatedVersionWarning?: string;

    /**
     * Default: "WORKFLOW_INPUTS"
     */
    readonly INPUT_SOURCE?: "WORKFLOW_INPUTS" | "JSON_EXAMPLE" | "PASSTHROUGH";

    /**
     */
    readonly `${JSON_EXAMPLE}_notice`?: string;

    /**
     * Default: "JSON.stringify(\n\t\t\t\t\t{\n\t\t\t\t\t\taField: 'a string',\n\t\t\t\t\t\taNumber: 123,\n\t\t\t\t\t\tthisFieldAcceptsAnyType: null,\n\t\t\t\t\t\tanArray: [],\n\t\t\t\t\t},\n\t\t\t\t\tnull,\n\t\t\t\t\t2,\n\t\t\t\t)"
     */
    readonly JSON_EXAMPLE?: any;

    /**
     * Define expected input fields. If no inputs are provided, all data from the calling workflow will be passed through.
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true,"minRequiredFields":1}
     */
    readonly WORKFLOW_INPUTS?: { "VALUES": any };


}

