// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HelpScoutOAuth2Api.credentials.ts' credentials

export const name = "helpScoutOAuth2Api" as const;

/**
 * displayName: HelpScout OAuth2 API
 * documentationUrl: helpScout
 */
export interface HelpScoutOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://secure.helpscout.net/authentication/authorizeClientApplication" */
    readonly "authUrl": any;

    /** Default: "https://api.helpscout.net/v2/oauth2/token" */
    readonly "accessTokenUrl": any;

    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "helpScoutOAuth2Api";
}
