// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterCharacterTextSplitter/TextSplitterCharacterTextSplitter.node.ts' node

export const name = "textSplitterCharacterTextSplitter" as const;
export const description = "Split text into chunks by characters" as const;
export const version = 1 as const;

/**
 * Split text into chunks by characters
 */
export interface TextSplitterCharacterTextSplitterAINodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    readonly separator?: string;

    /**
     * Default: 1000
     */
    readonly chunkSize?: number;

    readonly chunkOverlap?: number;


}

