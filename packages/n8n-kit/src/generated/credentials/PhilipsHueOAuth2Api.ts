// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PhilipsHueOAuth2Api.credentials.ts' credentials

export const name = "philipsHueOAuth2Api" as const;

/**
 * displayName: PhilipHue OAuth2 API
 * documentationUrl: philipsHue
 */
export interface PhilipsHueOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    readonly "appId"?: string;

    /**
     * Default: "https://api.meethue.com/v2/oauth2/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://api.meethue.com/v2/oauth2/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "={{\"appid=\"+$self[\"appId\"]}}"
     */
    readonly "authQueryParameters"?: any;

    readonly "scope"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "philipsHueOAuth2Api";
}
