// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZammadBasicAuthApi.credentials.ts' credentials

export const name = "zammadBasicAuthApi" as const;

/**
 * displayName: Zammad Basic Auth API
 * documentationUrl: zammad
 */
export interface ZammadBasicAuthApiCredentials {

    /**
     */
    readonly "baseUrl": string;

    /**
     */
    readonly "username": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password": string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "zammadBasicAuthApi";

}
