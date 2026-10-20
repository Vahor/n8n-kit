// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "An AI agent that exports its runs to MLflow Tracing in Databricks" as const;
export const type = "@n8n/n8n-nodes-langchain.databricksAiAgent" as const;
export const version = 2.2 as const;
export const credentials = [{"name":"databricksOAuth2Api","required":false}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface DatabricksAiAgentNodeParameters {
    /** Default: "auto" */
    readonly promptType?: "auto" | "define";

    /**
     * Default: "={{ $json.chatInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    readonly hasOutputParser?: boolean;

    readonly needsFallback?: boolean;

    /** Whether to send each run to MLflow Tracing in your Databricks workspace. Needs the Databricks credential above. Traces include prompts, model outputs and tool results. */
    readonly exportTraces?: boolean;

    /**
     * Where traces are stored. Leave the name empty to create one for this workflow automatically.
     * Default: {"mode":"name","value":""}
     */
    readonly experiment?: {
	value: string,
	mode: "name" | "id",
};

    /** Default: {} */
    readonly options?: { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, passthroughBinaryImages?: boolean, passthroughBinaryPdfs?: boolean, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> }, batching?: { batchSize?: number, delayBetweenBatches?: number }, enableStreaming?: boolean } | { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, passthroughBinaryImages?: boolean, passthroughBinaryPdfs?: boolean, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> }, batching?: { batchSize?: number, delayBetweenBatches?: number } };

}
