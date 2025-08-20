// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/AzureCosmosDb/AzureCosmosDb.node.ts' node

export const name = "azureCosmosDb" as const;
export const description = "Interact with Azure Cosmos DB API" as const;
export const version = 1 as const;
export const defaults = { name: "Azure Cosmos DB" } as const;
export const credentials = [
	{ name: "microsoftAzureCosmosDbSharedKeyApi", required: true },
] as const;

/**
 * Interact with Azure Cosmos DB API
 */
export interface AzureCosmosDbNodeParameters {
	/**
	 * Default: "container"
	 */
	readonly resource?: "container" | "item";
}
