// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/McpOAuth2Api.credentials.ts' credentials

export const name = "mcpOAuth2Api" as const;

/**
 * displayName: MCP OAuth2 API
 * documentationUrl: mcp
 */
export interface McpOAuth2ApiCredentials {
    /**
     * When on, n8n identifies itself automatically: it uses a Client ID Metadata Document (CIMD) when the server supports CIMD, S256 PKCE, and public clients, and your instance has CIMD enabled; otherwise it uses Dynamic Client Registration (DCR). CIMD does not send a registration request. Turn it off if the provider gives you a fixed client ID and secret, requires you to register a redirect URL, or doesn't support automatic registration.
     * Default: true
     */
    readonly "useDynamicClientRegistration"?: boolean;

    /**
     * Optional. The exact protected resource URL required by the MCP server. Leave empty to use the server's default, discovered automatically.
     * Type options: {"url":true}
     */
    readonly "resourceUrl"?: string;

    readonly __name: "mcpOAuth2Api";
}
