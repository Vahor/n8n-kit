// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsAwsBedrock/EmbeddingsAwsBedrock.node.ts' node

export const description = "Use Embeddings AWS Bedrock" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;

/**
 * Use Embeddings AWS Bedrock
 */
export interface EmbeddingsAwsBedrockNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/foundation-models?byInferenceType=ON_DEMAND&byOutputModality=EMBEDDING"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"modelSummaries"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.modelName}}","description":"={{$responseItem.modelArn}}","value":"={{$responseItem.modelId}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;


}

