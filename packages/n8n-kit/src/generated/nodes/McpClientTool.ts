// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/mcp/McpClientTool/McpClientTool.node.ts' node

export const name = "mcpClientTool" as const;
export const description = "Connect tools from an MCP Server" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"httpBearerAuth","required":true,"displayOptions":{"show":{"authentication":["bearerAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}}] as const;

/**
 * Connect tools from an MCP Server
 */
export interface McpClientToolNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * SSE Endpoint of your MCP server
     */
    readonly sseEndpoint?: string;

    /**
     * Endpoint of your MCP server
     */
    readonly endpointUrl?: string;

    /**
     * The transport used by your endpoint
     * Default: "sse"
     */
    readonly serverTransport?: "sse" | "httpStreamable";

    /**
     * The way to authenticate with your endpoint
     * Default: "none"
     */
    readonly authentication?: "bearerAuth" | "headerAuth" | "none";

    /**
     */
    readonly credentials?: any;

    /**
     * How to select the tools you want to be exposed to the AI Agent
     * Default: "all"
     */
    readonly include?: "all" | "selected" | "except";

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getTools","loadOptionsDependsOn":["sseEndpoint"]}
     */
    readonly includeTools?: any[];

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getTools"}
     */
    readonly excludeTools?: any[];

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "timeout"?: number };


}

