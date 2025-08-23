// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterTokenSplitter/TextSplitterTokenSplitter.node.ts' node

export const name = "textSplitterTokenSplitter" as const;
export const description = "Split text into chunks by tokens" as const;
export const version = 1 as const;

/**
 * Split text into chunks by tokens
 */
export interface TextSplitterTokenSplitterNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: 1000
     */
    readonly chunkSize?: number;

    readonly chunkOverlap?: number;


}

