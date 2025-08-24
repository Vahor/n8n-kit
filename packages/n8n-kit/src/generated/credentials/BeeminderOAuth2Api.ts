// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BeeminderOAuth2Api.credentials.ts' credentials

export const name = "beeminderOAuth2Api" as const;

/**
 * displayName: Beeminder OAuth2 API
 * documentationUrl: beeminder
 */
export interface BeeminderOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://www.beeminder.com/apps/authorize" */
    readonly "authUrl": any;

    /** Default: "https://www.beeminder.com/apps/authorize" */
    readonly "accessTokenUrl": any;

    /** Default: "response_type=token" */
    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly "scope"?: any;

    readonly __name: "beeminderOAuth2Api";
}
