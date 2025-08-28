// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZendeskOAuth2Api.credentials.ts' credentials

export const name = "zendeskOAuth2Api" as const;

/**
 * displayName: Zendesk OAuth2 API
 * documentationUrl: zendesk
 */
export interface ZendeskOAuth2ApiCredentials {
    /** The subdomain of your Zendesk work environment */
    readonly "subdomain": string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /**
     * URL to get authorization code. Replace {SUBDOMAIN_HERE} with your subdomain.
     * Default: "=https://{{$self[\"subdomain\"]}}.zendesk.com/oauth/authorizations/new"
     */
    readonly "authUrl": unknown;

    /**
     * URL to get access token. Replace {SUBDOMAIN_HERE} with your subdomain.
     * Default: "=https://{{$self[\"subdomain\"]}}.zendesk.com/oauth/tokens"
     */
    readonly "accessTokenUrl": unknown;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    /** Default: "read write" */
    readonly "scope"?: unknown;

    /** For some services additional query parameters have to be set which can be defined here */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "zendeskOAuth2Api";
}
