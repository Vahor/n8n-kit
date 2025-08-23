// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverWorkflow/RetrieverWorkflow.node.ts' node

export const description = "Use an n8n Workflow as Retriever" as const;
export const type = "@n8n/n8n-nodes-langchain.retrieverWorkflow" as const;
export const version = 1.1 as const;
export const outputs = {"Retriever":"ai_retriever"} as const;

export interface RetrieverWorkflowNodeParameters {

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

