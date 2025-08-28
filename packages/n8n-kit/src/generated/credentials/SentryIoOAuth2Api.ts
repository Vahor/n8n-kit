// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SentryIoOAuth2Api.credentials.ts' credentials

export const name = "sentryIoOAuth2Api" as const;

/**
 * displayName: Sentry.io OAuth2 API
 * documentationUrl: sentryIo
 */
export interface SentryIoOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://sentry.io/oauth/authorize/" */
    readonly "authUrl": unknown;

    /** Default: "https://sentry.io/oauth/token/" */
    readonly "accessTokenUrl": unknown;

    /** Default: "event:admin event:read org:read project:read project:releases team:read event:write org:admin project:write team:write project:admin team:admin" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "sentryIoOAuth2Api";
}
