// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PushbulletOAuth2Api.credentials.ts' credentials

export const name = "pushbulletOAuth2Api" as const;

/**
 * displayName: Pushbullet OAuth2 API
 * documentationUrl: pushbullet
 */
export interface PushbulletOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://www.pushbullet.com/authorize" */
    readonly "authUrl": any;

    /** Default: "https://api.pushbullet.com/oauth2/token" */
    readonly "accessTokenUrl": any;

    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "pushbulletOAuth2Api";
}
