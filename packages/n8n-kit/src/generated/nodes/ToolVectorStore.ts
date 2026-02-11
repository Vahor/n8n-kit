// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolVectorStore/ToolVectorStore.node.ts' node

export const description = "Answer questions with a vector store" as const;
export const type = "@n8n/n8n-nodes-langchain.toolVectorStore" as const;
export const version = 1.1 as const;
export const inputs = {"Vector Store":"ai_vectorStore","Model":"ai_languageModel"} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolVectorStoreNodeParameters {
    /** Name of the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question. */
    readonly name?: string;

    /**
     * Describe the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question.
     * Type options: {"rows":3}
     */
    readonly description?: string;

    /**
     * The maximum number of results to return
     * Default: 4
     */
    readonly topK?: number;

}
