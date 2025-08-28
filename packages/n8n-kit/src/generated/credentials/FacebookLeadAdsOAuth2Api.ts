// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FacebookLeadAdsOAuth2Api.credentials.ts' credentials

export const name = "facebookLeadAdsOAuth2Api" as const;

/**
 * displayName: Facebook Lead Ads OAuth2 API
 * documentationUrl: facebookleadads
 */
export interface FacebookLeadAdsOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.facebook.com/v17.0/dialog/oauth" */
    readonly "authUrl": unknown;

    /** Default: "https://graph.facebook.com/v17.0/oauth/access_token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "leads_retrieval pages_show_list pages_manage_metadata pages_manage_ads business_management" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "facebookLeadAdsOAuth2Api";
}
