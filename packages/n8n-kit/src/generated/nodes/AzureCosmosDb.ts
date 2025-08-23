// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/AzureCosmosDb/AzureCosmosDb.node.ts' node

export const description = "Interact with Azure Cosmos DB API" as const;
export const type = "n8n-nodes-base.azureCosmosDb" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftAzureCosmosDbSharedKeyApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface AzureCosmosDbNodeParameters {

    /**
     * Default: "container"
     */
    readonly resource?: "container" | "item";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "query" | "update";

    /**
     * Unique identifier for the new container
     */
    readonly containerCreate?: string;

    /**
     * The partition key is used to automatically distribute data across partitions for scalability. Choose a property in your JSON document that has a wide range of values and evenly distributes request volume.
     * Default: "{\n\t\"paths\": [\n\t\t\"/id\"\n\t],\n\t\"kind\": \"Hash\",\n\t\"version\": 2\n}"
     */
    readonly partitionKey?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "indexingPolicy"?: string, "maxThroughput"?: number, "offerThroughput"?: number } | { "partitionKey"?: string };

    /**
     * Select the container you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly container?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * The item contents as a JSON object
     * Default: "{\n\t\"id\": \"replace_with_new_document_id\"\n}"
     */
    readonly customProperties?: string;

    /**
     * Select the item to be deleted
     * Default: {"mode":"list","value":""}
     */
    readonly item?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The SQL query to execute. Use $1, $2, $3, etc., to reference the 'Query Parameters' set in the options below.
     * Type options: {"editor":"sqlEditor","sqlDialect":"StandardSQL"}
     */
    readonly query?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly options?: { "queryOptions": any };


}

