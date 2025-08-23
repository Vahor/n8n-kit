// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DriftOAuth2Api.credentials.ts' credentials

export const name = "driftOAuth2Api" as const;

/**
 * displayName: Drift OAuth2 API
 * documentationUrl: drift
 */
export interface DriftOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://dev.drift.com/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://driftapi.com/oauth2/token"
     */
    readonly "accessTokenUrl": any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     */
    readonly "scope"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "driftOAuth2Api";

}
