// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/ToolExecutor/ToolExecutor.node.ts' node

export const description = "Node to execute tools without an AI Agent" as const;
export const type = "@n8n/n8n-nodes-langchain.toolExecutor" as const;
export const version = 1 as const;
export const inputs = {"main":"main","ai_tool":"ai_tool"} as const;
export const outputs = {"main":"main"} as const;

export interface ToolExecutorNodeParameters {
    /**
     * Parameters to pass to the tool as JSON or string
     * Default: "{}"
     */
    readonly query?: string;

    /** Name of the tool to execute if the connected tool is a toolkit */
    readonly toolName?: string;

}
