// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolWorkflow/v2/ToolWorkflowV2.node.ts' node

export const description = "Uses another n8n workflow as a tool. Allows packaging any n8n node(s) as a tool." as const;
export const type = "@n8n/n8n-nodes-langchain.toolWorkflow" as const;
export const version = 2.2 as const;
export const inputs = {} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolWorkflowV2NodeParameters {
    /** The name of the function to be called, could contain letters, numbers, and underscores only */
    readonly name?: string;

    /** Type options: {"rows":3} */
    readonly description?: string;

    /**
     * Where to get the workflow to execute from
     * Default: "database"
     */
    readonly source?: "database" | "parameter";

    readonly workflowId?: string;

    /**
     * The workflow JSON code to execute
     * Default: "\n\n\n\n\n\n\n\n\n"
     * Type options: {"rows":10}
     */
    readonly workflowJson?: string;

}
