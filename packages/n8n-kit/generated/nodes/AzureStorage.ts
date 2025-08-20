// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Storage/AzureStorage.node.ts' node

export const name = "azureStorage" as const;
export const description = "Interact with Azure Storage API" as const;
export const version = 1 as const;
export const defaults = {"name":"Azure Storage"} as const;
export const credentials = [{"name":"azureStorageOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"azureStorageSharedKeyApi","required":true,"displayOptions":{"show":{"authentication":["sharedKey"]}}}] as const

/**
 * Interact with Azure Storage API
 */
export interface AzureStorageNodeParameters {

    /**
     * Default: "sharedKey"
     */
    readonly authentication?: "oAuth2" | "sharedKey";

    /**
     * Default: "container"
     */
    readonly resource?: "blob" | "container";


}

