// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OAuth2Api.credentials.ts' credentials

export const name = "oAuth2Api" as const;

/**
 * displayName: OAuth2 API
 * documentationUrl: httpRequest
 */
export interface OAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: "authorizationCode" | "clientCredentials" | "pkce";

    readonly "authUrl": string;

    readonly "accessTokenUrl": string;

    readonly "clientId": string;

    /**
     * Type options: {"password":true}
     */
    readonly "clientSecret": string;

    readonly "scope"?: string;

    /**
     * For some services additional query parameters have to be set which can be defined here
     */
    readonly "authQueryParameters"?: string;

    /**
     * Default: "header"
     */
    readonly "authentication"?: "body" | "header";

    readonly "sendAdditionalBodyProperties"?: boolean;

    /**
     * Type options: {"rows":5}
     */
    readonly "additionalBodyProperties"?: string;

    readonly "ignoreSSLIssues"?: boolean;

    readonly __name: "oAuth2Api";
}
