// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/ChromaCloudApi.credentials.ts' credentials

export const name = "chromaCloudApi" as const;

/**
 * displayName: ChromaDB Cloud
 * documentationUrl: chroma
 */
export interface ChromaCloudApiCredentials {
    /**
     * Your Chroma Cloud API key
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /** Optional: Tenant ID (auto-resolved if API key is scoped to single DB) */
    readonly "tenant"?: string;

    /** Optional: Database name (auto-resolved if API key is scoped to single DB) */
    readonly "database"?: string;

    /** Default: "https://api.trychroma.com" */
    readonly "baseUrl": string;

    readonly __name: "chromaCloudApi";
}
