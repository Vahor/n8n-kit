// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/AzureOpenAiApi.credentials.ts' credentials

export const name = "azureOpenAiApi" as const;

/**
 * displayName: Azure Open AI
 * documentationUrl: azureopenai
 */
export interface AzureOpenAiApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     */
    readonly "resourceName": string;

    /**
     * Default: "2025-03-01-preview"
     */
    readonly "apiVersion": string;

    /**
     */
    readonly "endpoint"?: string;

    readonly __name: "azureOpenAiApi";


}

