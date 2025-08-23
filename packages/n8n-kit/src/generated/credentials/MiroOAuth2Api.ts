// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MiroOAuth2Api.credentials.ts' credentials

export const name = "miroOAuth2Api" as const;

/**
 * displayName: Miro OAuth2 API
 * documentationUrl: miro
 */
export interface MiroOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://miro.com/oauth/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://api.miro.com/v1/oauth/token"
     */
    readonly "accessTokenUrl": any;

    /**
     */
    readonly "scope": any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "miroOAuth2Api";


}

