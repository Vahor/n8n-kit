// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatAzureOpenAi/LmChatAzureOpenAi.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi" as const;
export const version = 1 as const;
export const credentials = [{"name":"azureOpenAiApi","required":true,"displayOptions":{"show":{"authentication":["azureOpenAiApi"]}}},{"name":"azureEntraCognitiveServicesOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["azureEntraCognitiveServicesOAuth2Api"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatAzureOpenAiNodeParameters {
    /** Default: "azureOpenAiApi" */
    readonly authentication?: "azureOpenAiApi" | "azureEntraCognitiveServicesOAuth2Api";

    /** The name of the model(deployment) to use (e.g., gpt-4, gpt-35-turbo) */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "frequencyPenalty"?: number, "maxTokens"?: number, "responseFormat"?: "text" | "json_object", "presencePenalty"?: number, "temperature"?: number, "timeout"?: number, "maxRetries"?: number, "topP"?: number };

}
