// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/QuickBooksOAuth2Api.credentials.ts' credentials

export const name = "quickBooksOAuth2Api" as const;

/**
 * displayName: QuickBooks Online OAuth2 API
 * documentationUrl: quickbooks
 */
export interface QuickBooksOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://appcenter.intuit.com/connect/oauth2" */
    readonly "authUrl"?: unknown;

    /** Default: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "com.intuit.quickbooks.accounting" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Default: "production" */
    readonly "environment"?: "production" | "sandbox";

    readonly __name: "quickBooksOAuth2Api";
}
