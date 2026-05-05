// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/ChatHubVectorStoreQdrantApi.credentials.ts' credentials

export const name = "chatHubVectorStoreQdrantApi" as const;

/**
 * displayName: ChatHub Qdrant Vector Store API
 * documentationUrl: qdrant
 */
export interface ChatHubVectorStoreQdrantApiCredentials {
    /**
     * The Qdrant collection to use. All users share this collection; access is scoped per user via a userId metadata field. The collection is created automatically if it does not exist.
     * Default: "n8n_vectors"
     */
    readonly "collectionName"?: string;

    readonly __name: "chatHubVectorStoreQdrantApi";
}
