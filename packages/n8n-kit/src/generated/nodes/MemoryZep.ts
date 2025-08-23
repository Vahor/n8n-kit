// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryZep/MemoryZep.node.ts' node

export const description = "Use Zep Memory" as const;
export const type = "@n8n/n8n-nodes-langchain.memoryZep" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"zepApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_memory":"ai_memory"} as const;

export interface MemoryZepNodeParameters {
    readonly deprecationNotice?: string;

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    readonly supportedVersions?: string;

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
