// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftOAuth2Api.credentials.ts' credentials

export const name = "microsoftOAuth2Api" as const;

/**
 * displayName: Microsoft OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
     */
    readonly "authUrl"?: string;

    /**
     * Default: "https://login.microsoftonline.com/common/oauth2/v2.0/token"
     */
    readonly "accessTokenUrl"?: string;

    /**
     * Default: "response_mode=query"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "microsoftOAuth2Api";
}
