// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/MilvusApi.credentials.ts' credentials

export const name = "milvusApi" as const;

/**
 * displayName: Milvus
 * documentationUrl: milvus
 */
export interface MilvusApiCredentials {
    /**
     * Default: "http://localhost:19530"
     */
    readonly "baseUrl": string;

    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "milvusApi";
}
