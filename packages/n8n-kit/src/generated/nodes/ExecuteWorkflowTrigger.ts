// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ExecuteWorkflow/ExecuteWorkflowTrigger/ExecuteWorkflowTrigger.node.ts' node

export const description = "Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows." as const;
export const type = "n8n-nodes-base.executeWorkflowTrigger" as const;
export const version = 1.1 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ExecuteWorkflowTriggerNodeParameters {
    /** Default: "workflowInputs" */
    readonly inputSource?: "workflowInputs" | "jsonExample" | "passthrough";

    /** Default: "{\n  \"aField\": \"a string\",\n  \"aNumber\": 123,\n  \"thisFieldAcceptsAnyType\": null,\n  \"anArray\": []\n}" */
    readonly jsonExample?: string;

    /**
     * Define expected input fields. If no inputs are provided, all data from the calling workflow will be passed through.
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true,"minRequiredFields":1}
     */
    readonly workflowInputs?: { "values": any };

}
