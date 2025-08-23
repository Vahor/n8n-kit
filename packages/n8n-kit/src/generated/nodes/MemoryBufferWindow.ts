// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryBufferWindow/MemoryBufferWindow.node.ts' node

export const name = "memoryBufferWindow" as const;
export const description = "Stores in n8n memory, so no credentials required" as const;
export const version = 1.3 as const;

/**
 * Stores in n8n memory, so no credentials required
 */
export interface MemoryBufferWindowNodeParameters {

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
     * Default: 5
     */
    readonly contextWindowLength?: number;


}

