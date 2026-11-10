// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatAzureOpenAi/LmChatAzureOpenAi.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"azureOpenAiApi","required":true,"displayOptions":{"show":{"authentication":["azureOpenAiApi"]}}},{"name":"azureEntraCognitiveServicesOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["azureEntraCognitiveServicesOAuth2Api"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatAzureOpenAiNodeParameters {
    /** Default: "azureOpenAiApi" */
    readonly authentication?: "azureOpenAiApi" | "azureEntraCognitiveServicesOAuth2Api";

    /** The name of the model(deployment) to use (e.g., gpt-4, gpt-35-turbo) */
    readonly model?: string | {
	value: string,
	mode: "list" | "id",
};

    /** The Microsoft Foundry project that owns the deployment. Leave empty to use the project from the credential. A classic Azure OpenAI resource does not use it. */
    readonly project?: string;

    /**
     * The API family the deployment answers on. Azure does not report this, so set it to match the deployment: OpenAI for GPT and other OpenAI-compatible models, Anthropic for Claude. Anthropic needs a credential using the Azure AI Foundry endpoint type.
     * Default: "openai"
     */
    readonly modelFamily?: "openai" | "anthropic";

    /** Whether to call the deployment on the Responses API instead of Chat Completions. Azure does not tell us which one a deployment supports, so set this to match your deployment: leave it off for a chat-completions deployment, turn it on for a Responses-only one. Needs a credential using the Microsoft Foundry endpoint type. */
    readonly responsesApiEnabled?: boolean;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { frequencyPenalty?: number, maxTokens?: number, responseFormat?: "text" | "json_object", presencePenalty?: number, temperature?: number, timeout?: number, maxRetries?: number, topP?: number, extraBody?: string };

}
