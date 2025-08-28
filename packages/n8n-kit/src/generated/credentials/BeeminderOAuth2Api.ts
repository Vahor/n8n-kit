// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BeeminderOAuth2Api.credentials.ts' credentials

export const name = "beeminderOAuth2Api" as const;

/**
 * displayName: Beeminder OAuth2 API
 * documentationUrl: beeminder
 */
export interface BeeminderOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.beeminder.com/apps/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://www.beeminder.com/apps/authorize" */
    readonly "accessTokenUrl": unknown;

    /** Default: "response_type=token" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly "scope"?: unknown;

    readonly __name: "beeminderOAuth2Api";
}
