// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryMotorhead/MemoryMotorhead.node.ts' node

export const description = "Use Motorhead Memory" as const;
export const type = "@n8n/n8n-nodes-langchain.memoryMotorhead" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"motorheadApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_memory":"ai_memory"} as const;

export interface MemoryMotorheadNodeParameters {
    readonly sessionId?: string;

    /** Default: "fromInput" */
    readonly sessionIdType?: "fromInput" | "customKey";

    /** Default: "={{ $json.sessionId }}" */
    readonly sessionKey?: string;

}
