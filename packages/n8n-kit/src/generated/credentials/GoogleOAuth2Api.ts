// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleOAuth2Api.credentials.ts' credentials

export const name = "googleOAuth2Api" as const;

/**
 * displayName: Google OAuth2 API
 * documentationUrl: google/oauth-generic
 */
export interface GoogleOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://accounts.google.com/o/oauth2/v2/auth" */
    readonly "authUrl"?: unknown;

    /** Default: "https://oauth2.googleapis.com/token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "access_type=offline&prompt=consent" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "googleOAuth2Api";
}
