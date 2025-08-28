// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PipedriveOAuth2Api.credentials.ts' credentials

export const name = "pipedriveOAuth2Api" as const;

/**
 * displayName: Pipedrive OAuth2 API
 * documentationUrl: pipedrive
 */
export interface PipedriveOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://oauth.pipedrive.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://oauth.pipedrive.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "pipedriveOAuth2Api";
}
