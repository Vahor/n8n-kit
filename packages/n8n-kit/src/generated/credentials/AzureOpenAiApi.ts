// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/AzureOpenAiApi.credentials.ts' credentials

export const name = "azureOpenAiApi" as const;

/**
 * displayName: Microsoft Foundry (API Key)
 * documentationUrl: azureopenai
 */
export interface AzureOpenAiApiCredentials {
    /**
     * Classic targets *.openai.azure.com (resource name + deployment-based URLs). Microsoft Foundry targets *.services.ai.azure.com/openai/v1 (full endpoint URL).
     * Default: "classic"
     */
    readonly "endpointType"?: "classic" | "foundry";

    /** Type options: {"password":true} */
    readonly "apiKey": string;

    readonly "resourceName": string;

    /** Default: "2025-03-01-preview" */
    readonly "apiVersion": string;

    readonly "foundryEndpoint": string;

    /** Optional. The Microsoft Foundry project that owns your deployments. n8n uses it to list the deployments. The project overview page in the Foundry portal shows the name. */
    readonly "project"?: string;

    readonly "endpoint"?: string;

    readonly __name: "azureOpenAiApi";
}
