// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterRecursiveCharacterTextSplitter/TextSplitterRecursiveCharacterTextSplitter.node.ts' node

export const description = "Split text into chunks by characters recursively, recommended for most use cases" as const;
export const type = "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"ai_textSplitter":"ai_textSplitter"} as const;

export interface TextSplitterRecursiveCharacterTextSplitterNodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: 1000
     */
    readonly chunkSize?: number;

    readonly chunkOverlap?: number;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "splitCode"?: "cpp" | "go" | "java" | "js" | "php" | "proto" | "python" | "rst" | "ruby" | "rust" | "scala" | "swift" | "markdown" | "latex" | "html" };

}
