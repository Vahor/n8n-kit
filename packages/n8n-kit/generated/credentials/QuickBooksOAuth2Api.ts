// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/QuickBooksOAuth2Api.credentials.ts' credentials

export const name = "quickBooksOAuth2Api" as const;

/**
 * displayName: QuickBooks Online OAuth2 API
 * documentationUrl: quickbooks
 */
export interface QuickBooksOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://appcenter.intuit.com/connect/oauth2"
     */
    readonly authUrl?: any;

    /**
     * Default: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer"
     */
    readonly accessTokenUrl?: any;

    /**
     * Default: "com.intuit.quickbooks.accounting"
     */
    readonly scope?: any;

    /**
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "header"
     */
    readonly authentication?: any;

    /**
     * Default: "production"
     */
    readonly environment?: "production" | "sandbox";


}

