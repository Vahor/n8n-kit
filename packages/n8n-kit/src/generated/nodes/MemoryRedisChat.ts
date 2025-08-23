// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryRedisChat/MemoryRedisChat.node.ts' node

export const description = "Stores the chat history in Redis." as const;
export const type = "@n8n/n8n-nodes-langchain.memoryRedisChat" as const;
export const version = 1.5 as const;
export const credentials = [{"name":"redis","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_memory":"ai_memory"} as const;

export interface MemoryRedisChatNodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The key to use to store the memory in the workflow data
     * Default: "chat_history"
     */
    readonly sessionKey?: string;

    /**
     * Default: "fromInput"
     */
    readonly sessionIdType?: "fromInput" | "customKey";

    /**
     * For how long the session should be stored in seconds. If set to 0 it will not expire.
     */
    readonly sessionTTL?: number;

    /**
     * Default: 5
     */
    readonly contextWindowLength?: number;

}
