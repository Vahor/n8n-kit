// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDriveTrigger.node.ts' node

export const description = "Trigger for Microsoft OneDrive API." as const;
export const type = "n8n-nodes-base.microsoftOneDriveTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftOneDriveOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftOneDriveTriggerNodeParameters {
    /** Default: "fileCreated" */
    readonly event?: "fileCreated" | "fileUpdated" | "folderCreated" | "folderUpdated";

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Whether to watch for the created file in a given folder, rather than the entire OneDrive */
    readonly watchFolder?: boolean;

    /**
     * How to select which file to watch
     * Default: "anyFile"
     */
    readonly watch?: "anyFile" | "selectedFolder" | "selectedFile" | "anyFolder" | "selectedFolder" | "oneSelectedFolder";

    /**
     * The file to operate on. The 'By URL' option only accepts URLs that start with 'https://onedrive.live.com'.
     * Default: {"mode":"id","value":""}
     */
    readonly fileId?: {
	value: string,
	mode: "url" | "id",
};

    /**
     * The folder to operate on. The 'By URL' option only accepts URLs that start with 'https://onedrive.live.com'.
     * Default: {"mode":"id","value":"","cachedResultName":""}
     */
    readonly folderId?: {
	value: string,
	mode: "url" | "id",
};

    /** Default: {} */
    readonly options?: { "folderChild"?: boolean };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
