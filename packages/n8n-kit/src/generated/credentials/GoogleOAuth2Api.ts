// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleOAuth2Api.credentials.ts' credentials

export const name = "googleOAuth2Api" as const;

/**
 * displayName: Google OAuth2 API
 * documentationUrl: google/oauth-generic
 */
export interface GoogleOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://accounts.google.com/o/oauth2/v2/auth"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://oauth2.googleapis.com/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "access_type=offline&prompt=consent"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "googleOAuth2Api";

}
