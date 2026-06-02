// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BoxOAuth2Api.credentials.ts' credentials

export const name = "boxOAuth2Api" as const;

/**
 * displayName: Box OAuth2 API
 * documentationUrl: box
 */
export interface BoxOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://account.box.com/api/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.box.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /**
     * Used to verify the authenticity of webhook requests. Find it in the Box Developer Console under your app's Webhooks tab > Manage signature keys.
     * Type options: {"password":true}
     */
    readonly "signingKeyPrimary"?: string;

    /**
     * Used to verify the authenticity of webhook requests during key rotation. Find it in the Box Developer Console under your app's Webhooks tab > Manage signature keys.
     * Type options: {"password":true}
     */
    readonly "signingKeySecondary"?: string;

    readonly __name: "boxOAuth2Api";
}
