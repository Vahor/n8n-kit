// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/ChatHubVectorStorePineconeApi.credentials.ts' credentials

export const name = "chatHubVectorStorePineconeApi" as const;

/**
 * displayName: ChatHub Pinecone Vector Store API
 * documentationUrl: pinecone
 */
export interface ChatHubVectorStorePineconeApiCredentials {
    /** The Pinecone index to use for all users. */
    readonly "pineconeIndex": string;

    /**
     * Prefix for namespace names. The full namespace will be {prefix}_{userId}.
     * Default: "n8n_vectors"
     */
    readonly "namespacePrefix"?: string;

    readonly __name: "chatHubVectorStorePineconeApi";
}
