// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LinkedInCommunityManagementOAuth2Api.credentials.ts' credentials

export const name = "linkedInCommunityManagementOAuth2Api" as const;

/**
 * displayName: LinkedIn Community Management OAuth2 API
 * documentationUrl: linkedIn
 */
export interface LinkedInCommunityManagementOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://www.linkedin.com/oauth/v2/authorization"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://www.linkedin.com/oauth/v2/accessToken"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "w_member_social w_organization_social r_basicprofile"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "linkedInCommunityManagementOAuth2Api";

}
