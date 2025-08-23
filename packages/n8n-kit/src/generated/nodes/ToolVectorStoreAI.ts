// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolVectorStore/ToolVectorStore.node.ts' node

export const name = "toolVectorStore" as const;
export const description = "Answer questions with a vector store" as const;
export const version = 1.1 as const;

/**
 * Answer questions with a vector store
 */
export interface ToolVectorStoreAINodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Name of the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question.
     */
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

