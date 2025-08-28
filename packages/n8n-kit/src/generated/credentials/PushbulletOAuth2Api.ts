// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PushbulletOAuth2Api.credentials.ts' credentials

export const name = "pushbulletOAuth2Api" as const;

/**
 * displayName: Pushbullet OAuth2 API
 * documentationUrl: pushbullet
 */
export interface PushbulletOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.pushbullet.com/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.pushbullet.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "pushbulletOAuth2Api";
}
