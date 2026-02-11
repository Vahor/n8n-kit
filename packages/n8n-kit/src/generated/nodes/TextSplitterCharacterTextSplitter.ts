// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterCharacterTextSplitter/TextSplitterCharacterTextSplitter.node.ts' node

export const description = "Split text into chunks by characters" as const;
export const type = "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"ai_textSplitter":"ai_textSplitter"} as const;

export interface TextSplitterCharacterTextSplitterNodeParameters {
    readonly separator?: string;

    /**
     * Maximum number of characters per chunk
     * Default: 1000
     */
    readonly chunkSize?: number;

    /** Number of characters shared between consecutive chunks to preserve context */
    readonly chunkOverlap?: number;

}
