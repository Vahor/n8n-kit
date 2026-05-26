// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/StravaOAuth2Api.credentials.ts' credentials

export const name = "stravaOAuth2Api" as const;

/**
 * displayName: Strava OAuth2 API
 * documentationUrl: strava
 */
export interface StravaOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.strava.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://www.strava.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Whether to define custom OAuth2 scopes instead of the defaults */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Comma-separated list of Strava OAuth2 scopes to request
     * Default: "activity:read_all,activity:write"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"activity:read_all,activity:write\"}}" */
    readonly "scope": unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "stravaOAuth2Api";
}
