// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Drive/GoogleDriveTrigger.node.ts' node

export const name = "googleDriveTrigger" as const;
export const description = "Starts the workflow when Google Drive events occur" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleDriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Starts the workflow when Google Drive events occur
 */
export interface GoogleDriveTriggerNodeParameters {

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    readonly triggerOn: "specificFile" | "specificFolder";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly fileToWatch?: any;

    /**
     * When to trigger this node
     * Default: "fileUpdated"
     */
    readonly event?: "fileUpdated" | "fileCreated" | "fileUpdated" | "folderCreated" | "folderUpdated" | "watchFolderUpdated" | "fileCreated" | "fileUpdated" | "folderCreated" | "folderUpdated";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly folderToWatch?: any;

    readonly asas?: string;

    /**
     * The drive to monitor. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: "root"
     * Type options: {"loadOptionsMethod":"getDrives"}
     */
    readonly driveToWatch?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fileType"?: "all" | "application/vnd.google-apps.audio" | "application/vnd.google-apps.document" | "application/vnd.google-apps.drawing" | "application/vnd.google-apps.presentation" | "application/vnd.google-apps.spreadsheet" | "application/vnd.google-apps.photo" | "application/vnd.google-apps.video" };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

