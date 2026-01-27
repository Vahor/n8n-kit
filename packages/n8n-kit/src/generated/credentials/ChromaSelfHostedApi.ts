// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/ChromaSelfHostedApi.credentials.ts' credentials

export const name = "chromaSelfHostedApi" as const;

/**
 * displayName: ChromaDB Self-Hosted
 * documentationUrl: chroma
 */
export interface ChromaSelfHostedApiCredentials {
    /**
     * The URL of your ChromaDB instance. Note that path prefixes are not supported, so the URL must point directly to the instance root.
     * Default: "http://localhost:8000"
     */
    readonly "baseUrl"?: string;

    /** Default: "none" */
    readonly "authentication"?: "none" | "apiKey" | "token";

    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /** Type options: {"password":true} */
    readonly "token"?: string;

    readonly __name: "chromaSelfHostedApi";
}
