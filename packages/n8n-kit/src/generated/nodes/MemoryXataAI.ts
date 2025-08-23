// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryXata/MemoryXata.node.ts' node

export const name = "memoryXata" as const;
export const description = "Use Xata Memory" as const;
export const version = 1.4 as const;
export const credentials = [{"name":"xataApi","required":true}] as const;

/**
 * Use Xata Memory
 */
export interface MemoryXataAINodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    readonly sessionId?: string;

    /**
     * Default: "fromInput"
     */
    readonly sessionIdType?: "fromInput" | "customKey";

    /**
     * The key to use to store session ID in the memory
     */
    readonly sessionKey?: string;

    /**
     * Default: 5
     */
    readonly contextWindowLength?: number;


}

