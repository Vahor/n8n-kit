// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZendeskOAuth2Api.credentials.ts' credentials

export const name = "zendeskOAuth2Api" as const;

/**
 * displayName: Zendesk OAuth2 API
 * documentationUrl: zendesk
 */
export interface ZendeskOAuth2ApiNodeParameters {

    /**
     * The subdomain of your Zendesk work environment
     */
    readonly subdomain: string;

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * URL to get authorization code. Replace {SUBDOMAIN_HERE} with your subdomain.
     * Default: "=https://{{$self[\"subdomain\"]}}.zendesk.com/oauth/authorizations/new"
     */
    readonly authUrl: any;

    /**
     * URL to get access token. Replace {SUBDOMAIN_HERE} with your subdomain.
     * Default: "=https://{{$self[\"subdomain\"]}}.zendesk.com/oauth/tokens"
     */
    readonly accessTokenUrl: any;

    /**
     */
    readonly clientId: string;

    /**
     * Type options: {"password":true}
     */
    readonly clientSecret: string;

    /**
     * Default: "read write"
     */
    readonly scope?: any;

    /**
     * For some services additional query parameters have to be set which can be defined here
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "body"
     */
    readonly authentication?: any;


}

