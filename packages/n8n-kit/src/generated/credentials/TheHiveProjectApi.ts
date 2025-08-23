// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TheHiveProjectApi.credentials.ts' credentials

export const name = "theHiveProjectApi" as const;

/**
 * displayName: The Hive 5 API
 * documentationUrl: theHive
 */
export interface TheHiveProjectApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "ApiKey"?: string;

    /**
     * The URL of TheHive instance
     */
    readonly "url"?: string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "theHiveProjectApi";
}
