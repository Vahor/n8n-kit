// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ServiceNowOAuth2Api.credentials.ts' credentials

export const name = "serviceNowOAuth2Api" as const;

/**
 * displayName: ServiceNow OAuth2 API
 * documentationUrl: serviceNow
 */
export interface ServiceNowOAuth2ApiCredentials {

    /**
     */
    readonly "subdomain": string;

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "=https://{{$self[\"subdomain\"]}}.service-now.com/oauth_auth.do"
     */
    readonly "authUrl": any;

    /**
     * Default: "=https://{{$self[\"subdomain\"]}}.service-now.com/oauth_token.do"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "useraccount"
     */
    readonly "scope"?: any;

    /**
     * Default: "response_type=code"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "serviceNowOAuth2Api";


}

