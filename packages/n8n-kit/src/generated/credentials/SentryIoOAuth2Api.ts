// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SentryIoOAuth2Api.credentials.ts' credentials

export const name = "sentryIoOAuth2Api" as const;

/**
 * displayName: Sentry.io OAuth2 API
 * documentationUrl: sentryIo
 */
export interface SentryIoOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://sentry.io/oauth/authorize/" */
    readonly "authUrl": any;

    /** Default: "https://sentry.io/oauth/token/" */
    readonly "accessTokenUrl": any;

    /** Default: "event:admin event:read org:read project:read project:releases team:read event:write org:admin project:write team:write project:admin team:admin" */
    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "sentryIoOAuth2Api";
}
