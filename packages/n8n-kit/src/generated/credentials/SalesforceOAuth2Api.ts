// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SalesforceOAuth2Api.credentials.ts' credentials

export const name = "salesforceOAuth2Api" as const;

/**
 * displayName: Salesforce OAuth2 API
 * documentationUrl: salesforce
 */
export interface SalesforceOAuth2ApiCredentials {
    /** Default: "pkce" */
    readonly "grantType"?: unknown;

    /** Default: "production" */
    readonly "environment"?: "production" | "sandbox";

    /** Default: "={{ $self[\"environment\"] === \"sandbox\" ? \"https://test.salesforce.com/services/oauth2/authorize?prompt=login\" : \"https://login.salesforce.com/services/oauth2/authorize?prompt=login\" }}" */
    readonly "authUrl": unknown;

    /** Default: "={{ $self[\"environment\"] === \"sandbox\" ? \"https://test.salesforce.com/services/oauth2/token\" : \"https://login.salesforce.com/services/oauth2/token\" }}" */
    readonly "accessTokenUrl": unknown;

    /** Default: "full refresh_token" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "salesforceOAuth2Api";
}
