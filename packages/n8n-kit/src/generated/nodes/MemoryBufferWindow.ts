// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryBufferWindow/MemoryBufferWindow.node.ts' node

export const description = "Stores in n8n memory, so no credentials required" as const;
export const type = "@n8n/n8n-nodes-langchain.memoryBufferWindow" as const;
export const version = 1.3 as const;
export const inputs = {} as const;
export const outputs = {"ai_memory":"ai_memory"} as const;

export interface MemoryBufferWindowNodeParameters {
    /**
     * The key to use to store the memory in the workflow data
     * Default: "chat_history"
     */
    readonly sessionKey?: string;

    /** Default: "fromInput" */
    readonly sessionIdType?: "fromInput" | "customKey";

    /** Default: 5 */
    readonly contextWindowLength?: number;

}
