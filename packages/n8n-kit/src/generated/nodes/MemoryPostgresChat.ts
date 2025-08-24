// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryPostgresChat/MemoryPostgresChat.node.ts' node

export const description = "Stores the chat history in Postgres table." as const;
export const type = "@n8n/n8n-nodes-langchain.memoryPostgresChat" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"postgres","required":true,"testedBy":"postgresConnectionTest"}] as const;
export const inputs = {} as const;
export const outputs = {"ai_memory":"ai_memory"} as const;

export interface MemoryPostgresChatNodeParameters {
    /**
     * Default: "fromInput"
     */
    readonly sessionIdType?: "fromInput" | "customKey";

    /**
     * Default: "={{ $json.sessionId }}"
     */
    readonly sessionKey?: string;

    /**
     * The table name to store the chat history in. If table does not exist, it will be created.
     * Default: "n8n_chat_histories"
     */
    readonly tableName?: string;

    /**
     * Default: 5
     */
    readonly contextWindowLength?: number;

}
