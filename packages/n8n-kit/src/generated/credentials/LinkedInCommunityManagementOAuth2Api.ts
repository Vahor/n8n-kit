// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LinkedInCommunityManagementOAuth2Api.credentials.ts' credentials

export const name = "linkedInCommunityManagementOAuth2Api" as const;

/**
 * displayName: LinkedIn Community Management OAuth2 API
 * documentationUrl: linkedin
 */
export interface LinkedInCommunityManagementOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.linkedin.com/oauth/v2/authorization" */
    readonly "authUrl": unknown;

    /** Default: "https://www.linkedin.com/oauth/v2/accessToken" */
    readonly "accessTokenUrl": unknown;

    /** Default: "w_member_social w_organization_social r_basicprofile" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "linkedInCommunityManagementOAuth2Api";
}
