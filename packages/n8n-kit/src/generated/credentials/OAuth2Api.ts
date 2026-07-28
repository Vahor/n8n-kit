// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OAuth2Api.credentials.ts' credentials

export const name = "oAuth2Api" as const;

/**
 * displayName: OAuth2 API
 * documentationUrl: httprequest
 */
export interface OAuth2ApiCredentials {
    readonly "useDynamicClientRegistration"?: unknown;

    /** Default: "authorizationCode" */
    readonly "grantType"?: "authorizationCode" | "clientCredentials" | "pkce";

    readonly "serverUrl": string;

    readonly "authUrl": string;

    readonly "accessTokenUrl": string;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    readonly "scope"?: string;

    /** For some services additional query parameters have to be set which can be defined here */
    readonly "authQueryParameters"?: string;

    /** Default: "header" */
    readonly "authentication"?: "body" | "header";

    readonly "sendAdditionalBodyProperties"?: boolean;

    /** Type options: {"rows":5} */
    readonly "additionalBodyProperties"?: string;

    readonly "ignoreSSLIssues"?: boolean;

    /**
     * HTTP status code that indicates the token has expired. Some APIs return 403 instead of 401.
     * Default: 401
     */
    readonly "tokenExpiredStatusCode"?: number;

    /** Whether the IdP returns tokens encrypted as JWE to the public key at this instance’s JWKS endpoint. The response must contain at least one JWE-encrypted token (access or ID token); fully plaintext responses are rejected. */
    readonly "jweEnabled"?: boolean;

    /**
     * Provide this URL to your IdP so it can fetch the public key used to encrypt access and ID tokens for this instance.
     * Type options: {"copyButton":true}
     */
    readonly "jwksUri"?: string;

    /** Whether to send the public keys directly in the dynamic client registration payload instead of advertising a JWKS URI. Enable this when the IdP cannot reach this instance (e.g. when self-hosted behind a firewall). */
    readonly "inlineJwks"?: boolean;

    readonly __name: "oAuth2Api";
}
