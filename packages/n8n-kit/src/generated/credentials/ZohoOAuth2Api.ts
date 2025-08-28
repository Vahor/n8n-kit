// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZohoOAuth2Api.credentials.ts' credentials

export const name = "zohoOAuth2Api" as const;

/**
 * displayName: Zoho OAuth2 API
 * documentationUrl: zoho
 */
export interface ZohoOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://accounts.zoho.com/oauth/v2/auth" */
    readonly "authUrl": "https://accounts.zoho.com/oauth/v2/auth" | "https://accounts.zoho.com.cn/oauth/v2/auth";

    /** Default: "https://accounts.zoho.com/oauth/v2/token" */
    readonly "accessTokenUrl": "https://accounts.zoho.com.au/oauth/v2/token" | "https://accounts.zoho.com.cn/oauth/v2/token" | "https://accounts.zoho.eu/oauth/v2/token" | "https://accounts.zoho.in/oauth/v2/token" | "https://accounts.zoho.com/oauth/v2/token";

    /** Default: "ZohoCRM.modules.ALL,ZohoCRM.settings.all,ZohoCRM.users.all" */
    readonly "scope"?: unknown;

    /** Default: "access_type=offline" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "zohoOAuth2Api";
}
