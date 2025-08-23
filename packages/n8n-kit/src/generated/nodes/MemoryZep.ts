// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryZep/MemoryZep.node.ts' node

export const name = "memoryZep" as const;
export const description = "Use Zep Memory" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"zepApi","required":true}] as const;

/**
 * Use Zep Memory
 */
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

