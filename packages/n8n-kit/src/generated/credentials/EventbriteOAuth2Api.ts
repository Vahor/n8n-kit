// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/EventbriteOAuth2Api.credentials.ts' credentials

export const name = "eventbriteOAuth2Api" as const;

/**
 * displayName: Eventbrite OAuth2 API
 * documentationUrl: eventbrite
 */
export interface EventbriteOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.eventbrite.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://www.eventbrite.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "eventbriteOAuth2Api";
}
