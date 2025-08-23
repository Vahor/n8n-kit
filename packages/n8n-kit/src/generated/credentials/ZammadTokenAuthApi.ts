// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZammadTokenAuthApi.credentials.ts' credentials

export const name = "zammadTokenAuthApi" as const;

/**
 * displayName: Zammad Token Auth API
 * documentationUrl: zammad
 */
export interface ZammadTokenAuthApiCredentials {
    readonly "baseUrl": string;

    /**
     * Type options: {"password":true}
     */
    readonly "accessToken": string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "zammadTokenAuthApi";
}
