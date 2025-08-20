// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDriveTrigger.node.ts' node

export const name = "microsoftOneDriveTrigger" as const;
export const description = "Trigger for Microsoft OneDrive API." as const;
export const version = 1 as const;
export const defaults = {"name":"Microsoft OneDrive Trigger"} as const;
export const credentials = [{"name":"microsoftOneDriveOAuth2Api","required":true}] as const

/**
 * Trigger for Microsoft OneDrive API.
 */
export interface MicrosoftOneDriveTriggerNodeParameters {

    /**
     * Default: "fileCreated"
     */
    readonly event?: "fileCreated" | "fileUpdated" | "folderCreated" | "folderUpdated";

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Whether to watch for the created file in a given folder, rather than the entire OneDrive
     */
    readonly watchFolder?: boolean;

    /**
     * How to select which file to watch
     * Default: "anyFile"
     */
    readonly watch?: "anyFile" | "selectedFolder" | "selectedFile" | "anyFolder" | "oneSelectedFolder";

    /**
     * Default: {}
     */
    readonly options?: { "folderChild"?: boolean };


}

