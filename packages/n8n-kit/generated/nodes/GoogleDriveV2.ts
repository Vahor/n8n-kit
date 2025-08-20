// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Drive/v2/GoogleDriveV2.node.ts' node

export const name = "googleDrive" as const;
export const description = "Access data on Google Drive" as const;
export const version = 3 as const;
export const defaults = {"name":"Google Drive"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleDriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Access data on Google Drive
 */
export interface GoogleDriveV2NodeParameters {

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "file"
     */
    readonly resource?: "file" | "fileFolder" | "folder" | "drive";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "deleteDrive" | "get" | "list" | "update" | "copy" | "createFromText" | "download" | "move" | "share" | "upload" | "search";


}

