// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterTokenSplitter/TextSplitterTokenSplitter.node.ts' node

export const description = "Split text into chunks by tokens" as const;
export const type = "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"ai_textSplitter":"ai_textSplitter"} as const;

export interface TextSplitterTokenSplitterNodeParameters {
    /**
     * Default: 1000
     */
    readonly chunkSize?: number;

    readonly chunkOverlap?: number;

}
