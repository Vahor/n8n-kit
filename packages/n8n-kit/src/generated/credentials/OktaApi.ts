// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OktaApi.credentials.ts' credentials

export const name = "oktaApi" as const;

/**
 * displayName: Okta API
 * documentationUrl: okta
 */
export interface OktaApiCredentials {
    readonly "url": string;

    /**
     * Secure Session Web Service Access Token
     * Type options: {"password":true}
     */
    readonly "accessToken": string;

    readonly __name: "oktaApi";
}
