// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/code/Code.node.ts' node

export const description = "LangChain Code Node" as const;
export const type = "@n8n/n8n-nodes-langchain.code" as const;
export const version = 1 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"custom":"custom"} as const;

export interface CodeAINodeParameters {
    /** Default: {} */
    readonly code?: { execute: { code?: string }, supplyData: { code?: string } };

    /**
     * The input to add
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly inputs?: { input: { type: "ai_chain" | "ai_document" | "ai_embedding" | "ai_languageModel" | "ai_memory" | "ai_outputParser" | "ai_textSplitter" | "ai_tool" | "ai_vectorStore" | "main", maxConnections: number, required: boolean } };

    /**
     * The output to add
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly outputs?: { output: { type: "ai_chain" | "ai_document" | "ai_embedding" | "ai_languageModel" | "ai_memory" | "ai_outputParser" | "ai_textSplitter" | "ai_tool" | "ai_vectorStore" | "main" } };

}
