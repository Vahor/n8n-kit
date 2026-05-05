// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/ChatHubVectorStorePGVectorApi.credentials.ts' credentials

export const name = "chatHubVectorStorePGVectorApi" as const;

/**
 * displayName: ChatHub PGVector Store API
 * documentationUrl: postgres
 */
export interface ChatHubVectorStorePGVectorApiCredentials {
    /**
     * Prefix for table names. The full table name will be {prefix}_{userId}.
     * Default: "n8n_vectors"
     */
    readonly "tableNamePrefix"?: string;

    readonly __name: "chatHubVectorStorePGVectorApi";
}
