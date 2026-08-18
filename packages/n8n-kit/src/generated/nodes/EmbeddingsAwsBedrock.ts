// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsAwsBedrock/EmbeddingsAwsBedrock.node.ts' node

export const description = "Use Embeddings AWS Bedrock" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true,"displayOptions":{"show":{"authentication":["iam"]}}},{"name":"awsAssumeRole","required":true,"displayOptions":{"show":{"authentication":["assumeRole"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsAwsBedrockNodeParameters {
    /** Default: "iam" */
    readonly authentication?: "iam" | "assumeRole";

    /**
     * The model or inference profile which will generate the embeddings. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.
     * Type options: {"loadOptionsDependsOn":["authentication"],"loadOptionsMethod":"listModels"}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { additionalModelRequestFields?: string, maxRetries?: number, timeout?: number };

}
