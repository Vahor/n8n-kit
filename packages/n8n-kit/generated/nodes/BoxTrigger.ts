// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Box/BoxTrigger.node.ts' node

export const name = "boxTrigger" as const;
export const description = "Starts the workflow when Box events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Box Trigger"} as const;
export const credentials = [{"name":"boxOAuth2Api","required":true}] as const

/**
 * Starts the workflow when Box events occur
 */
export interface BoxTriggerNodeParameters {

    /**
     * The events to listen to
     * Default: []
     */
    readonly events: ("COLLABORATION.ACCEPTED" | "COLLABORATION.CREATED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "COMMENT.CREATED" | "COMMENT.DELETED" | "COMMENT.UPDATED" | "FILE.COPIED" | "FILE.DELETED" | "FILE.DOWNLOADED" | "FILE.LOCKED" | "FILE.MOVED" | "FILE.PREVIEWED" | "FILE.RENAMED" | "FILE.RESTORED" | "FILE.TRASHED" | "FILE.UNLOCKED" | "FILE.UPLOADED" | "FOLDER.COPIED" | "FOLDER.CREATED" | "FOLDER.DELETED" | "FOLDER.DOWNLOADED" | "FOLDER.MOVED" | "FOLDER.RENAMED" | "FOLDER.RESTORED" | "FOLDER.TRASHED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.DELETED" | "METADATA_INSTANCE.UPDATED" | "SHARED_LINK.CREATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.UPDATED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "WEBHOOK.DELETED")[];

    /**
     * The type of item to trigger a webhook
     */
    readonly targetType?: "file" | "folder";

    /**
     * The ID of the item to trigger a webhook
     */
    readonly targetId?: string;


}

