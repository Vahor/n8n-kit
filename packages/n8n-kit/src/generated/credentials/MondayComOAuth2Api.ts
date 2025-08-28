// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MondayComOAuth2Api.credentials.ts' credentials

export const name = "mondayComOAuth2Api" as const;

/**
 * displayName: Monday.com OAuth2 API
 * documentationUrl: mondaycom
 */
export interface MondayComOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://auth.monday.com/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://auth.monday.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "boards:write boards:read" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "mondayComOAuth2Api";
}
