// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TwistOAuth2Api.credentials.ts' credentials

export const name = "twistOAuth2Api" as const;

/**
 * displayName: Twist OAuth2 API
 * documentationUrl: twist
 */
export interface TwistOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://twist.com/oauth/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://twist.com/oauth/access_token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "attachments:write,channels:remove,comments:remove,messages:remove,threads:remove,workspaces:read"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "twistOAuth2Api";

}
