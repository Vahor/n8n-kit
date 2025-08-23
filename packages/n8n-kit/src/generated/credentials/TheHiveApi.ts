// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TheHiveApi.credentials.ts' credentials

export const name = "theHiveApi" as const;

/**
 * displayName: The Hive API
 * documentationUrl: theHive
 */
export interface TheHiveApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "ApiKey"?: string;

    /**
     * The URL of TheHive instance
     */
    readonly "url"?: string;

    /**
     * The version of api to be used
     */
    readonly "apiVersion"?: "v1" | "";

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "theHiveApi";

}
