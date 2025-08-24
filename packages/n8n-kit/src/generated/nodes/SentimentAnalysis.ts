// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/SentimentAnalysis/SentimentAnalysis.node.ts' node

export const description = "Analyze the sentiment of your text" as const;
export const type = "@n8n/n8n-nodes-langchain.sentimentAnalysis" as const;
export const version = 1.1 as const;
export const inputs = {"":"main","Model":"ai_languageModel"} as const;
export const outputs = {"custom":"custom"} as const;

export interface SentimentAnalysisNodeParameters {
    /**
     * Use an expression to reference data in previous nodes or enter static text
     * Type options: {"rows":2}
     */
    readonly inputText?: string;

    /**
     * Default: {}
     */
    readonly options?: { "categories"?: string, "systemPromptTemplate"?: string, "includeDetailedResults"?: boolean, "enableAutoFixing"?: boolean, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number } };

}
