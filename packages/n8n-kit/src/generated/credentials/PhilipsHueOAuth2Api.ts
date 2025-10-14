// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PhilipsHueOAuth2Api.credentials.ts' credentials

export const name = "philipsHueOAuth2Api" as const;

/**
 * displayName: PhilipHue OAuth2 API
 * documentationUrl: philipshue
 */
export interface PhilipsHueOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    readonly "appId"?: string;

    /** Default: "https://api.meethue.com/v2/oauth2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://api.meethue.com/v2/oauth2/token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "={{\"appid=\"+$self[\"appId\"]}}" */
    readonly "authQueryParameters"?: unknown;

    readonly "scope"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "philipsHueOAuth2Api";
}
