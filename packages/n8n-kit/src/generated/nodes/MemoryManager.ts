// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryManager/MemoryManager.node.ts' node

export const description = "Manage chat messages memory and use it in the workflow" as const;
export const type = "@n8n/n8n-nodes-langchain.memoryManager" as const;
export const version = 1.1 as const;
export const outputs = {"":"main"} as const;

export interface MemoryManagerNodeParameters {

    /**
     * Default: "load"
     */
    readonly mode?: "load" | "insert" | "delete";

    /**
     * Choose how new messages are inserted into the memory
     * Default: "insert"
     */
    readonly insertMode?: "insert" | "override";

    /**
     * How messages are deleted from memory
     * Default: "lastN"
     */
    readonly deleteMode?: "lastN" | "all";

    /**
     * Chat messages to insert into memory
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly messages?: { "messageValues": any };

    /**
     * The amount of last messages to delete
     * Default: 2
     */
    readonly lastMessagesCount?: number;

    /**
     * Whether to simplify the output to only include the sender and the text
     * Default: true
     */
    readonly simplifyOutput?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "groupMessages"?: boolean };


}

