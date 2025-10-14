// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ServiceNowOAuth2Api.credentials.ts' credentials

export const name = "serviceNowOAuth2Api" as const;

/**
 * displayName: ServiceNow OAuth2 API
 * documentationUrl: servicenow
 */
export interface ServiceNowOAuth2ApiCredentials {
    readonly "subdomain": string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "=https://{{$self[\"subdomain\"]}}.service-now.com/oauth_auth.do" */
    readonly "authUrl": unknown;

    /** Default: "=https://{{$self[\"subdomain\"]}}.service-now.com/oauth_token.do" */
    readonly "accessTokenUrl": unknown;

    /** Default: "useraccount" */
    readonly "scope"?: unknown;

    /** Default: "response_type=code" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "serviceNowOAuth2Api";
}
