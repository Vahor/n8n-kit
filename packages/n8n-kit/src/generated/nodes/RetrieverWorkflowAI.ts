// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverWorkflow/RetrieverWorkflow.node.ts' node

export const name = "retrieverWorkflow" as const;
export const description = "Use an n8n Workflow as Retriever" as const;
export const version = 1.1 as const;

/**
 * Use an n8n Workflow as Retriever
 */
export interface RetrieverWorkflowAINodeParameters {

    readonly executeNotice?: string;

    /**
     * Where to get the workflow to execute from
     * Default: "database"
     */
    readonly source?: "database" | "parameter";

    /**
     * The workflow to execute
     */
    readonly workflowId?: string | any;

    /**
     * The workflow JSON code to execute
     * Default: "\n\n\n"
     * Type options: {"rows":10}
     */
    readonly workflowJson?: string;

    /**
     * Set the values which should be made available in the workflow
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly fields?: { "values": any };


}

