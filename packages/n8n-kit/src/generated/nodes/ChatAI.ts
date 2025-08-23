// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/Chat.node.ts' node

export const name = "chat" as const;
export const description = "Send a message to a chat" as const;
export const version = 1 as const;

/**
 * Send a message to a chat
 */
export interface ChatAINodeParameters {

    readonly generalNotice?: string;

    /**
     * Type options: {"rows":6}
     */
    readonly message: string;

    /**
     * Default: true
     */
    readonly waitUserReply?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "memoryConnection"?: boolean, "limitWaitTime"?: { "values": any } };


}

