// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MediumOAuth2Api.credentials.ts' credentials

export const name = "mediumOAuth2Api" as const;

/**
 * displayName: Medium OAuth2 API
 * documentationUrl: medium
 */
export interface MediumOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://medium.com/m/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://medium.com/v1/tokens" */
    readonly "accessTokenUrl": unknown;

    /** Default: "basicProfile,publishPost,listPublications" */
    readonly "scope"?: unknown;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "mediumOAuth2Api";
}
