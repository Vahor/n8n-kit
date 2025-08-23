// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/Chat.node.ts' node

export const description = "Send a message to a chat" as const;
export const type = "@n8n/n8n-nodes-langchain.chat" as const;
export const version = 1 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface ChatAINodeParameters {
    readonly generalNotice?: string;

    /**
     * Type options: {"rows":6}
     */
    readonly message?: string;

    /**
     * Default: true
     */
    readonly waitUserReply?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "memoryConnection"?: boolean, "limitWaitTime"?: { "values": any } };

}
