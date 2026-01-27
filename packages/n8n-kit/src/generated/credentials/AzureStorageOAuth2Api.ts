// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AzureStorageOAuth2Api.credentials.ts' credentials

export const name = "azureStorageOAuth2Api" as const;

/**
 * displayName: Azure Storage OAuth2 API
 * documentationUrl: azurestorage
 */
export interface AzureStorageOAuth2ApiCredentials {
    readonly "account"?: string;

    /** Default: "=https://{{ $self[\"account\"] }}.blob.core.windows.net" */
    readonly "baseUrl"?: unknown;

    /** Default: "https://storage.azure.com/.default" */
    readonly "scope"?: unknown;

    /** Default: "https://graph.microsoft.com" */
    readonly "graphApiBaseUrl"?: unknown;

    readonly __name: "azureStorageOAuth2Api";
}
