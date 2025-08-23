// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WordpressApi.credentials.ts' credentials

export const name = "wordpressApi" as const;

/**
 * displayName: Wordpress API
 * documentationUrl: wordpress
 */
export interface WordpressApiCredentials {
    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly "url"?: string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "wordpressApi";
}
