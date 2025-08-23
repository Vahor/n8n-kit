// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WebflowOAuth2Api.credentials.ts' credentials

export const name = "webflowOAuth2Api" as const;

/**
 * displayName: Webflow OAuth2 API
 * documentationUrl: webflow
 */
export interface WebflowOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * If the legacy API should be used
     * Default: true
     */
    readonly "legacy"?: boolean;

    /**
     * Default: "https://webflow.com/oauth/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://api.webflow.com/oauth/access_token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "={{$self[\"legacy\"] ? \"\" : \"cms:read cms:write sites:read forms:read\"}}"
     */
    readonly "scope"?: any;

    /**
     * For some services additional query parameters have to be set which can be defined here
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "webflowOAuth2Api";
}
