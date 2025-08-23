// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/TextClassifier/TextClassifier.node.ts' node

export const description = "Classify your text into distinct categories" as const;
export const type = "@n8n/n8n-nodes-langchain.textClassifier" as const;
export const version = 1.1 as const;
export const inputs = {"":"main","Model":"ai_languageModel"} as const;
export const outputs = {} as const;

export interface TextClassifierNodeParameters {
    /**
     * Use an expression to reference data in previous nodes or enter static text
     * Type options: {"rows":2}
     */
    readonly inputText?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly categories?: { "categories": any };

    /**
     * Default: {}
     */
    readonly options?: { "multiClass"?: boolean, "fallback"?: "discard" | "other", "systemPromptTemplate"?: string, "enableAutoFixing"?: boolean, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number } };

}
