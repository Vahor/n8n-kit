// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HelpScoutOAuth2Api.credentials.ts' credentials

export const name = "helpScoutOAuth2Api" as const;

/**
 * displayName: HelpScout OAuth2 API
 * documentationUrl: helpscout
 */
export interface HelpScoutOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://secure.helpscout.net/authentication/authorizeClientApplication" */
    readonly "authUrl": unknown;

    /** Default: "https://api.helpscout.net/v2/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "helpScoutOAuth2Api";
}
