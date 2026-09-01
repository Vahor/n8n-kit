// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AtlassianOAuth2Api.credentials.ts' credentials

export const name = "atlassianOAuth2Api" as const;

/**
 * displayName: Atlassian OAuth2 API
 * documentationUrl: atlassian
 */
export interface AtlassianOAuth2ApiCredentials {
    /** The URL of your Atlassian site, e.g. https://your-site.atlassian.net. The scheme and any path (like /wiki) are ignored. */
    readonly "domain": string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://auth.atlassian.com/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://auth.atlassian.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "audience=api.atlassian.com&prompt=consent" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "atlassianOAuth2Api";
}
