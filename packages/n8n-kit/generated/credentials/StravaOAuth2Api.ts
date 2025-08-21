// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/StravaOAuth2Api.credentials.ts' credentials

export const name = "stravaOAuth2Api" as const;

/**
 * displayName: Strava OAuth2 API
 * documentationUrl: strava
 */
export interface StravaOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://www.strava.com/oauth/authorize"
     */
    readonly authUrl: any;

    /**
     * Default: "https://www.strava.com/oauth/token"
     */
    readonly accessTokenUrl: any;

    /**
     * Default: "activity:read_all,activity:write"
     */
    readonly scope: any;

    /**
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "body"
     */
    readonly authentication?: any;


}

