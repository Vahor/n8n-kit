// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/mcp/McpRegistryClientTool/McpRegistryClientTool.node.ts' node

export const description = "Runtime backing for MCP registry-derived nodes" as const;
export const type = "@n8n/n8n-nodes-langchain.mcpRegistryClientTool" as const;
export const version = 1 as const;
export const credentials = [{"name":"mcpOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"Tools":"ai_tool"} as const;

export interface McpRegistryClientToolNodeParameters {
    /**
     * How to select the tools you want to be exposed to the AI Agent
     * Default: "all"
     */
    readonly include?: "all" | "selected" | "except";

    /**
     * Tools from the MCP server to expose to the agent. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTools"}
     */
    readonly includeTools?: unknown[];

    /**
     * Tools from the MCP server to hide from the agent. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTools"}
     */
    readonly excludeTools?: unknown[];

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { timeout?: number };

}
