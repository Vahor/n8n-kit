// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LinkedInOAuth2Api.credentials.ts' credentials

export const name = "linkedInOAuth2Api" as const;

/**
 * displayName: LinkedIn OAuth2 API
 * documentationUrl: linkedIn
 */
export interface LinkedInOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Whether to request permissions to post as an organization
     * Default: true
     */
    readonly "organizationSupport"?: boolean;

    /**
     * Default: "https://www.linkedin.com/oauth/v2/authorization"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://www.linkedin.com/oauth/v2/accessToken"
     */
    readonly "accessTokenUrl": any;

    /**
     * Standard scopes for posting on behalf of a user or organization. See <a href="https://docs.microsoft.com/en-us/linkedin/marketing/getting-started#available-permissions"> this resource </a>.
     * Default: "=w_member_social{{$self[\"organizationSupport\"] === true ? \",w_organization_social\": $self[\"legacy\"] === true ? \",r_liteprofile,r_emailaddress\" : \",profile,email,openid\"}}"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    /**
     * Whether to use the legacy API
     * Default: true
     */
    readonly "legacy"?: boolean;

    readonly __name: "linkedInOAuth2Api";


}

