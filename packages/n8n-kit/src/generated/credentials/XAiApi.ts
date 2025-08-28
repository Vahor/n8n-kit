// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/XAiApi.credentials.ts' credentials

export const name = "xAiApi" as const;

/**
 * displayName: xAi
 * documentationUrl: xai
 */
export interface XAiApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Default: "https://api.x.ai/v1" */
    readonly "url"?: unknown;

    readonly __name: "xAiApi";
}
