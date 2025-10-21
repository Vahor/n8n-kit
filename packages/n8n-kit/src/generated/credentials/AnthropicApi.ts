// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/AnthropicApi.credentials.ts' credentials

export const name = "anthropicApi" as const;

/**
 * displayName: Anthropic
 * documentationUrl: anthropic
 */
export interface AnthropicApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /**
     * Override the default base URL for the API
     * Default: "https://api.anthropic.com"
     */
    readonly "url"?: string;

    readonly "header"?: boolean;

    readonly "headerName"?: string;

    /** Type options: {"password":true} */
    readonly "headerValue"?: string;

    readonly __name: "anthropicApi";
}
