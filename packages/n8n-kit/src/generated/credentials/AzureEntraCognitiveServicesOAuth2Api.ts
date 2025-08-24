// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/AzureEntraCognitiveServicesOAuth2Api.credentials.ts' credentials

export const name = "azureEntraCognitiveServicesOAuth2Api" as const;

/**
 * displayName: Azure Entra ID (Azure Active Directory) API
 * documentationUrl: azureEntraCognitiveServicesOAuth2Api
 */
export interface AzureEntraCognitiveServicesOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    readonly "resourceName": string;

    /** Default: "2025-03-01-preview" */
    readonly "apiVersion": string;

    readonly "endpoint"?: string;

    /**
     * Enter your Azure Tenant ID (Directory ID) or keep "common" for multi-tenant apps. Using a specific Tenant ID is generally recommended and required for certain authentication flows.
     * Default: "common"
     */
    readonly "tenantId"?: string;

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/authorize" */
    readonly "authUrl"?: any;

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/token" */
    readonly "accessTokenUrl"?: any;

    /** Default: "{\"grant_type\": \"client_credentials\", \"resource\": \"https://cognitiveservices.azure.com/\"}" */
    readonly "additionalBodyProperties"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    /** Define custom scopes. You might need this if the default scopes are not sufficient or if you want to minimize permissions. Ensure you include "openid" and "offline_access". */
    readonly "customScopes"?: boolean;

    /** For some services additional query parameters have to be set which can be defined here */
    readonly "authQueryParameters"?: any;

    /**
     * Space-separated list of scopes to request.
     * Default: "openid offline_access"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{ $self.customScopes ? $self.enabledScopes : \"openid offline_access\"}}" */
    readonly "scope"?: any;

    readonly __name: "azureEntraCognitiveServicesOAuth2Api";
}
