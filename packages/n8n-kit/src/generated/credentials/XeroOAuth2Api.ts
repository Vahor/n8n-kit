// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/XeroOAuth2Api.credentials.ts' credentials

export const name = "xeroOAuth2Api" as const;

/**
 * displayName: Xero OAuth2 API
 * documentationUrl: xero
 */
export interface XeroOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://login.xero.com/identity/connect/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://identity.xero.com/connect/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "offline_access accounting.transactions accounting.settings accounting.contacts"
     */
    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "xeroOAuth2Api";
}
