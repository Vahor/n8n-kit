// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CalendlyOAuth2Api.credentials.ts' credentials

export const name = "calendlyOAuth2Api" as const;

/**
 * displayName: Calendly OAuth2 API
 * documentationUrl: calendly
 */
export interface CalendlyOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://auth.calendly.com/oauth/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://auth.calendly.com/oauth/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     */
    readonly "scope"?: any;

    readonly __name: "calendlyOAuth2Api";


}

