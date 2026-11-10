// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AzureStorageSharedKeyApi.credentials.ts' credentials

export const name = "azureStorageSharedKeyApi" as const;

/**
 * displayName: Azure Storage Shared Key API
 * documentationUrl: azurestorage
 */
export interface AzureStorageSharedKeyApiCredentials {
    /** Account name */
    readonly "account"?: string;

    /**
     * Account key
     * Type options: {"password":true}
     */
    readonly "key"?: string;

    /** Default: "blob.core.windows.net" */
    readonly "environment"?: "blob.core.windows.net" | "blob.core.usgovcloudapi.net" | "blob.core.chinacloudapi.cn" | "custom";

    /** The https:// URL of the storage endpoint. The account name must be in the hostname. An administrator must set <code>N8N_AZURE_STORAGE_CUSTOM_ENDPOINTS_ENABLED=true</code> on this n8n instance. Endpoints with the account name in the path, such as Azurite, do not work. */
    readonly "customEndpoint": string;

    /** Default: "={{ $self[\"environment\"] === \"custom\" ? $self[\"customEndpoint\"] : \"https://\" + $self[\"account\"] + \".\" + $self[\"environment\"] }}" */
    readonly "baseUrl"?: unknown;

    readonly __name: "azureStorageSharedKeyApi";
}
