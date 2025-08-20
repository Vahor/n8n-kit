// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/LocalFileTrigger/LocalFileTrigger.node.js' node

export const name = "localFileTrigger" as const;
export const description = "Triggers a workflow on file system changes" as const;
export const version = 1 as const;
export const defaults = {"name":"Local File Trigger","color":"#404040"} as const;

/**
 * Triggers a workflow on file system changes
 */
export interface LocalFileTriggerNodeParameters {

    /**
     */
    readonly triggerOn: "file" | "folder";

    /**
     */
    readonly path?: string;

    /**
     * The events to listen to
     * Default: []
     */
    readonly events?: ("add" | "change" | "unlink" | "addDir" | "unlinkDir")[];

    /**
     * Default: {}
     */
    readonly options?: { "followSymlinks"?: boolean, "ignored"?: string, "depth"?: "1" | "2" | "3" | "4" | "5" | "0" | "-1" };


}

