// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/OpenRouterApi.credentials.ts' credentials

export const name = "openRouterApi" as const;

/**
 * displayName: OpenRouter
 * documentationUrl: openrouter
 */
export interface OpenRouterApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Default: "https://openrouter.ai/api/v1" */
    readonly "url"?: any;

    readonly __name: "openRouterApi";
}
