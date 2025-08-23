// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SalesforceOAuth2Api.credentials.ts' credentials

export const name = "salesforceOAuth2Api" as const;

/**
 * displayName: Salesforce OAuth2 API
 * documentationUrl: salesforce
 */
export interface SalesforceOAuth2ApiCredentials {

    /**
     * Default: "pkce"
     */
    readonly "grantType"?: any;

    /**
     * Default: "production"
     */
    readonly "environment"?: "production" | "sandbox";

    /**
     * Default: "={{ $self[\"environment\"] === \"sandbox\" ? \"https://test.salesforce.com/services/oauth2/authorize\" : \"https://login.salesforce.com/services/oauth2/authorize\" }}"
     */
    readonly "authUrl": any;

    /**
     * Default: "={{ $self[\"environment\"] === \"sandbox\" ? \"https://test.salesforce.com/services/oauth2/token\" : \"https://login.salesforce.com/services/oauth2/token\" }}"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "full refresh_token"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "salesforceOAuth2Api";

}
