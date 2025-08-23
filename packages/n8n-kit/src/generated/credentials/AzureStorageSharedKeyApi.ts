// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AzureStorageSharedKeyApi.credentials.ts' credentials

export const name = "azureStorageSharedKeyApi" as const;

/**
 * displayName: Azure Storage Shared Key API
 * documentationUrl: azurestorage
 */
export interface AzureStorageSharedKeyApiCredentials {

    /**
     * Account name
     */
    readonly "account"?: string;

    /**
     * Account key
     * Type options: {"password":true}
     */
    readonly "key"?: string;

    /**
     * Default: "=https://{{ $self[\"account\"] }}.blob.core.windows.net"
     */
    readonly "baseUrl"?: any;

    readonly __name: "azureStorageSharedKeyApi";

}
