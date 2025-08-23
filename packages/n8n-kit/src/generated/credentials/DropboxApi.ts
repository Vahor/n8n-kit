// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DropboxApi.credentials.ts' credentials

export const name = "dropboxApi" as const;

/**
 * displayName: Dropbox API
 * documentationUrl: dropbox
 */
export interface DropboxApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "accessToken"?: string;

    /**
     * Default: "full"
     */
    readonly "accessType"?: "folder" | "full";

    readonly __name: "dropboxApi";
}
