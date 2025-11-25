// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/mcp/McpClient/McpClient.node.ts' node

export const description = "Standalone MCP Client" as const;
export const type = "@n8n/n8n-nodes-langchain.mcpClient" as const;
export const version = 1 as const;
export const credentials = [{"name":"httpBearerAuth","required":true,"displayOptions":{"show":{"authentication":["bearerAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}},{"name":"mcpOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["mcpOAuth2Api"]}}},{"name":"httpMultipleHeadersAuth","required":true,"displayOptions":{"show":{"authentication":["multipleHeadersAuth"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface McpClientNodeParameters {
    /**
     * The transport used by your endpoint
     * Default: "httpStreamable"
     */
    readonly serverTransport?: "httpStreamable" | "sse";

    /** The URL of the MCP server to connect to */
    readonly endpointUrl?: string;

    /**
     * The way to authenticate with your endpoint
     * Default: "none"
     */
    readonly authentication?: "bearerAuth" | "headerAuth" | "mcpOAuth2Api" | "multipleHeadersAuth" | "none";

    /**
     * The tool to use
     * Default: {"mode":"list","value":""}
     */
    readonly tool?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "manual" */
    readonly inputMode?: "manual" | "json";

    /**
     * Default: "{\n  \"my_field_1\": \"value\",\n  \"my_field_2\": 1\n}\n"
     * Type options: {"rows":5}
     */
    readonly jsonInput?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { convertToBinary?: boolean, timeout?: number };

}
