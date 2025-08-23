// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AsanaOAuth2Api.credentials.ts' credentials

export const name = "asanaOAuth2Api" as const;

/**
 * displayName: Asana OAuth2 API
 * documentationUrl: asana
 */
export interface AsanaOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://app.asana.com/-/oauth_authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://app.asana.com/-/oauth_token"
     */
    readonly "accessTokenUrl": any;

    /**
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "asanaOAuth2Api";


}

