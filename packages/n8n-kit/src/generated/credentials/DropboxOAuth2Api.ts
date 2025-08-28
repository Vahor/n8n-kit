// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DropboxOAuth2Api.credentials.ts' credentials

export const name = "dropboxOAuth2Api" as const;

/**
 * displayName: Dropbox OAuth2 API
 * documentationUrl: dropbox
 */
export interface DropboxOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.dropbox.com/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.dropboxapi.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "files.content.write files.content.read sharing.read account_info.read" */
    readonly "scope"?: unknown;

    /** Default: "token_access_type=offline&force_reapprove=true" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Default: "full" */
    readonly "accessType"?: "folder" | "full";

    readonly __name: "dropboxOAuth2Api";
}
