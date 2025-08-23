// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/mcp/McpTrigger/McpTrigger.node.ts' node

export const description = "Expose n8n tools as an MCP Server endpoint" as const;
export const type = "@n8n/n8n-nodes-langchain.mcpTrigger" as const;
export const version = 2 as const;
export const credentials = [{"name":"httpBearerAuth","required":true,"displayOptions":{"show":{"authentication":["bearerAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}}] as const;
export const inputs = {"Tools":"ai_tool"} as const;
export const outputs = {} as const;

export interface McpTriggerNodeParameters {
    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "none" | "bearerAuth" | "headerAuth";

    /**
     * The base path for this MCP server
     */
    readonly path?: string;

}
