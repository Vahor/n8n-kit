// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleAdsOAuth2Api.credentials.ts' credentials

export const name = "googleAdsOAuth2Api" as const;

/**
 * displayName: Google Ads OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleAdsOAuth2ApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "developerToken": string;

    /**
     * Default: "https://www.googleapis.com/auth/adwords"
     */
    readonly "scope"?: any;

    readonly __name: "googleAdsOAuth2Api";
}
