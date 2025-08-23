// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatAwsBedrock/LmChatAwsBedrock.node.ts' node

export const description = "Language Model AWS Bedrock" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatAwsBedrock" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatAwsBedrockNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Choose between on-demand foundation models or inference profiles
     * Default: "onDemand"
     */
    readonly modelSource?: "onDemand" | "inferenceProfile";

    /**
     * The model which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.
     * Type options: {"loadOptionsDependsOn":["modelSource"],"loadOptions":{"routing":{"request":{"method":"GET","url":"/foundation-models?&byOutputModality=TEXT&byInferenceType=ON_DEMAND"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"modelSummaries"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.modelName}}","description":"={{$responseItem.modelArn}}","value":"={{$responseItem.modelId}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxTokensToSample"?: number, "temperature"?: number };


}

