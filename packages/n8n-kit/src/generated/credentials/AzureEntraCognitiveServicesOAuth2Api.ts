// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/AzureEntraCognitiveServicesOAuth2Api.credentials.ts' credentials

export const name = "azureEntraCognitiveServicesOAuth2Api" as const;

/**
 * displayName: Azure Entra ID (Azure Active Directory) API
 * documentationUrl: https://docs.n8n.io/integrations/builtin/credentials/azureopenai/#using-azure-entra-id-oauth2
 */
export interface AzureEntraCognitiveServicesOAuth2ApiCredentials {
    /** Default: "clientCredentials" */
    readonly "grantType"?: unknown;

    /**
     * Classic targets *.openai.azure.com (resource name + deployment-based URLs). Azure AI Foundry targets *.services.ai.azure.com/openai/v1 (full endpoint URL).
     * Default: "classic"
     */
    readonly "endpointType"?: "classic" | "foundry";

    readonly "resourceName": string;

    /** Default: "2025-03-01-preview" */
    readonly "apiVersion": string;

    readonly "foundryEndpoint": string;

    readonly "endpoint"?: string;

    /** The Directory (tenant) ID of the Entra app registration */
    readonly "tenantId": string;

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/token" */
    readonly "accessTokenUrl"?: unknown;

    readonly "sendAdditionalBodyProperties"?: unknown;

    /** Default: "{\"grant_type\": \"client_credentials\", \"resource\": \"https://cognitiveservices.azure.com/\"}" */
    readonly "additionalBodyProperties"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly "customScopes"?: unknown;

    /** For some services additional query parameters have to be set which can be defined here */
    readonly "authQueryParameters"?: unknown;

    /** Default: "openid offline_access" */
    readonly "enabledScopes"?: unknown;

    /** Default: "={{ $self.customScopes ? $self.enabledScopes : \"openid offline_access\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "azureEntraCognitiveServicesOAuth2Api";
}
