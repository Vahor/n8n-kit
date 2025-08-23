// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryMongoDbChat/MemoryMongoDbChat.node.ts' node

export const description = "Stores the chat history in MongoDB collection." as const;
export const type = "@n8n/n8n-nodes-langchain.memoryMongoDbChat" as const;
export const version = 1 as const;
export const credentials = [{"name":"mongoDb","required":true}] as const;
export const outputs = {"ai_memory":"ai_memory"} as const;

export interface MemoryMongoDbChatNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: "fromInput"
     */
    readonly sessionIdType?: "fromInput" | "customKey";

    /**
     * Default: "={{ $json.sessionId }}"
     */
    readonly sessionKey?: string;

    /**
     * The collection name to store the chat history in. If collection does not exist, it will be created.
     * Default: "n8n_chat_histories"
     */
    readonly collectionName?: string;

    /**
     * The database name to store the chat history in. If not provided, the database from credentials will be used.
     */
    readonly databaseName?: string;

    /**
     * Default: 5
     */
    readonly contextWindowLength?: number;


}

