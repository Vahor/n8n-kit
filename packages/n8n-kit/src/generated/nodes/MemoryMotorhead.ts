// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryMotorhead/MemoryMotorhead.node.ts' node

export const name = "memoryMotorhead" as const;
export const description = "Use Motorhead Memory" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"motorheadApi","required":true}] as const;

/**
 * Use Motorhead Memory
 */
export interface MemoryMotorheadNodeParameters {

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
     * Default: "={{ $json.sessionId }}"
     */
    readonly sessionKey?: string;


}

