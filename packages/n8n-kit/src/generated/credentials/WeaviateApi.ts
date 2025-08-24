// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/WeaviateApi.credentials.ts' credentials

export const name = "weaviateApi" as const;

/**
 * displayName: Weaviate Credentials
 * documentationUrl: https://docs.n8n.io/integrations/builtin/credentials/weaviate/
 */
export interface WeaviateApiCredentials {
    /**
     * Choose whether to connect to a Weaviate Cloud instance or a custom Weaviate instance.
     * Default: "weaviate_cloud"
     */
    readonly "connection_type"?: "weaviate_cloud" | "custom_connection";

    /** The Endpoint of a Weaviate Cloud instance. */
    readonly "weaviate_cloud_endpoint": string;

    /**
     * The API key for the Weaviate instance.
     * Type options: {"password":true}
     */
    readonly "weaviate_api_key"?: string;

    /**
     * The host of your Weaviate instance.
     * Default: "weaviate"
     */
    readonly "custom_connection_http_host": string;

    /**
     * The port of your Weaviate instance.
     * Default: 8080
     */
    readonly "custom_connection_http_port": number;

    /** Whether to use a secure connection for HTTP. */
    readonly "custom_connection_http_secure": boolean;

    /**
     * The gRPC host of your Weaviate instance.
     * Default: "weaviate"
     */
    readonly "custom_connection_grpc_host": string;

    /**
     * The gRPC port of your Weaviate instance.
     * Default: 50051
     */
    readonly "custom_connection_grpc_port": number;

    /** Whether to use a secure connection for gRPC. */
    readonly "custom_connection_grpc_secure": boolean;

    readonly __name: "weaviateApi";
}
