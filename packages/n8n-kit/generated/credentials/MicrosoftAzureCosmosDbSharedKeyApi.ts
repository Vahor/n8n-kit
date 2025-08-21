// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftAzureCosmosDbSharedKeyApi.credentials.ts' credentials

export const name = "microsoftAzureCosmosDbSharedKeyApi" as const;

/**
 * displayName: Microsoft Azure Cosmos DB API
 * documentationUrl: azurecosmosdb
 */
export interface MicrosoftAzureCosmosDbSharedKeyApiNodeParameters {

    /**
     * Account name
     */
    readonly account: string;

    /**
     * Account key
     * Type options: {"password":true}
     */
    readonly key: string;

    /**
     * Database name
     */
    readonly database: string;


}

