// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftTeamsManagerOAuth2Api.credentials.ts' credentials

export const name = "microsoftTeamsManagerOAuth2Api" as const;

/**
 * displayName: Microsoft Teams Manager OAuth2 API
 * documentationUrl: microsoftteams
 */
export interface MicrosoftTeamsManagerOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "openid profile offline_access https://graph.microsoft.com/User.Read https://graph.microsoft.com/Application.ReadWrite.All https://graph.microsoft.com/AppCatalog.ReadWrite.All https://graph.microsoft.com/AppCatalog.Submit" */
    readonly "scope"?: unknown;

    /** Default: "response_mode=query&prompt=select_account" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /** Default: "none" */
    readonly "allowedHttpRequestDomains"?: unknown;

    readonly __name: "microsoftTeamsManagerOAuth2Api";
}
