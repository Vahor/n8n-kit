// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/memory/MemoryChatRetriever/MemoryChatRetriever.node.ts' node

export const description = "Retrieve chat messages from memory and use them in the workflow" as const;
export const type = "@n8n/n8n-nodes-langchain.memoryChatRetriever" as const;
export const version = 1 as const;

/**
 * Retrieve chat messages from memory and use them in the workflow
 */
export interface MemoryChatRetrieverNodeParameters {

    readonly deprecatedNotice?: string;

    /**
     * Whether to simplify the output to only include the sender and the text
     * Default: true
     */
    readonly simplifyOutput?: boolean;


}

