// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/OllamaApi.credentials.ts' credentials

export const name = "ollamaApi" as const;

/**
 * displayName: Ollama
 * documentationUrl: ollama
 */
export interface OllamaApiCredentials {
    /** Default: "http://localhost:11434" */
    readonly "baseUrl": string;

    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    readonly __name: "ollamaApi";
}
