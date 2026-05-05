// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Databricks/Databricks.node.ts' node

export const description = "Interact with Databricks API" as const;
export const type = "n8n-nodes-base.databricks" as const;
export const version = 1 as const;
export const credentials = [{"name":"databricksApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"databricksOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DatabricksNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Default: "databricksSql" */
    readonly resource?: "databricksSql" | "files" | "genie" | "modelServing" | "unityCatalog" | "vectorSearch";

    /** Default: "listDirectory" */
    readonly operation?: "createDirectory" | "deleteDirectory" | "deleteFile" | "downloadFile" | "getFileInfo" | "listDirectory" | "uploadFile" | "createMessage" | "executeMessageQuery" | "getMessage" | "getSpace" | "getQueryResults" | "startConversation" | "createCatalog" | "createFunction" | "createTable" | "createVolume" | "deleteCatalog" | "deleteFunction" | "deleteTable" | "deleteVolume" | "getCatalog" | "getFunction" | "getTable" | "getVolume" | "listCatalogs" | "listFunctions" | "listTables" | "listVolumes" | "updateCatalog" | "executeQuery" | "queryEndpoint" | "createIndex" | "getIndex" | "listIndexes" | "queryIndex";

    /** Full path to the volume in format: catalog.schema.volume */
    readonly volumePath?: string;

    /** Path to the file within the volume (e.g. "folder/file.txt" or "file.txt"). Do not include leading slash. */
    readonly filePath?: string;

    /**
     * Name of the field from input that contains the binary data to be uploaded
     * Default: "data"
     */
    readonly dataFieldName?: string;

    /** Path to directory within the volume (e.g. "folder1" or "folder1/subfolder"). Do not include leading slash. */
    readonly directoryPath?: string;

    /** Default: {} */
    readonly additionalFields?: { pageSize?: number, pageToken?: string, overwrite?: boolean } | { comment?: string, storage_location?: string };

    /** The ID of the Genie space */
    readonly spaceId?: string;

    /** The ID of the conversation */
    readonly conversationId?: string;

    /** The ID of the message */
    readonly messageId?: string;

    /** The ID of the message attachment */
    readonly attachmentId?: string;

    /**
     * The message to be sent to Genie Space
     * Type options: {"rows":4}
     */
    readonly message?: string;

    /**
     * The initial message to start the conversation
     * Type options: {"rows":4}
     */
    readonly initialMessage?: string;

    /**
     * The catalog to use
     * Default: {"mode":"list","value":""}
     */
    readonly catalogName?: {
	value: string,
	mode: "list" | "string",
};

    /**
     * The schema to use
     * Default: {"mode":"list","value":""}
     */
    readonly schemaName?: {
	value: string,
	mode: "list" | "string",
};

    /**
     * The table to access
     * Default: {"mode":"list","value":""}
     */
    readonly fullName?: {
	value: string,
	mode: "list" | "string",
};

    /** Name of the volume */
    readonly volumeName?: string;

    /**
     * The type of volume to create
     * Default: "MANAGED"
     */
    readonly volumeType?: "MANAGED" | "EXTERNAL";

    /** Name of the function to create */
    readonly functionName?: string;

    /**
     * Array of input parameters. Each parameter requires name, type_name, and type_text.
     * Default: "[]"
     */
    readonly inputParams?: string;

    /**
     * The return type of the function (e.g., STRING, INT, DOUBLE)
     * Default: "STRING"
     */
    readonly returnType?: string;

    /**
     * The language of the function body
     * Default: "SQL"
     */
    readonly routineBody?: string;

    /**
     * The function body (SQL expression)
     * Type options: {"rows":4}
     */
    readonly routineDefinition?: string;

    /** Optional comment or description */
    readonly comment?: string;

    /** Name of the table to create */
    readonly tableName?: string;

    /** External storage root URL for the table. The Create Table API only supports external Delta tables. */
    readonly storageLocation?: string;

    /** Default: {} */
    readonly tableAdditionalFields?: { columns?: string, comment?: string };

    /**
     * The SQL warehouse to use
     * Default: {"mode":"list","value":""}
     */
    readonly warehouseId?: {
	value: string,
	mode: "list" | "id" | "url",
};

    /**
     * SQL query to execute
     * Type options: {"editor":"sqlEditor","sqlDialect":"StandardSQL","rows":10,"alwaysOpenEditWindow":false}
     */
    readonly query?: string;

    /**
     * Named parameters for the query. Reference them in your SQL as <code>:name</code>, e.g. <code>WHERE ID = :user_id</code>.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly queryParameters?: { parameters: Array<{ name?: string, value?: string, type?: "" | "BOOLEAN" | "DATE" | "DOUBLE" | "FLOAT" | "INT" | "LONG" | "STRING" | "TIMESTAMP" }> };

    /**
     * The model serving endpoint to query. The input format will be automatically detected from the endpoint schema. The node will fetch the endpoint's OpenAPI schema to determine the correct invocation URL.
     * Default: {"mode":"list","value":""}
     */
    readonly endpointName?: {
	value: string,
	mode: "list" | "name" | "url",
} | string;

    /**
     * Request body in JSON format. The node automatically detects the expected format from the endpoint's OpenAPI schema and validates your input at runtime.
     * Default: "{\n  \"messages\": [\n    {\n      \"role\": \"user\",\n      \"content\": \"Hello!\"\n    }\n  ]\n}"
     * Type options: {"rows":10}
     */
    readonly requestBody?: string;

    /** Name of the vector search index */
    readonly indexName?: string;

    /** Primary key column of the index */
    readonly primaryKey?: string;

    /**
     * Type of vector search index to create
     * Default: "DELTA_SYNC"
     */
    readonly indexType?: "DELTA_SYNC" | "DIRECT_ACCESS";

    /**
     * Specification for the Delta Sync index
     * Default: "{\n  \"source_table\": \"catalog.schema.table\",\n  \"pipeline_type\": \"TRIGGERED\",\n  \"embedding_source_columns\": [{\n    \"name\": \"text\",\n    \"embedding_model_endpoint_name\": \"e5-small-v2\"\n  }],\n  \"columns_to_sync\": [\"id\", \"text\"]\n}"
     * Type options: {"rows":8}
     */
    readonly deltaSyncIndexSpec?: string;

    /**
     * Specification for the Direct Access index
     * Default: "{\n  \"embedding_vector_columns\": [{\n    \"name\": \"embedding\",\n    \"embedding_dimension\": 1536\n  }],\n  \"schema_json\": \"{}\"\n}"
     * Type options: {"rows":6}
     */
    readonly directAccessIndexSpec?: string;

    /**
     * Type of query to perform
     * Default: "text"
     */
    readonly queryType?: "text" | "vector";

    /** Text to search for (will be automatically converted to embeddings) */
    readonly queryText?: string;

    /**
     * Vector embeddings to search for similar vectors (array of numbers)
     * Default: "[]"
     */
    readonly queryVector?: string;

    /**
     * Search algorithm to use
     * Default: "ANN"
     */
    readonly searchMode?: "HYBRID" | "ANN";

    /** Comma-separated list of column names to return in results (e.g., "content,URL,title") */
    readonly columns?: string;

    /**
     * Maximum number of results to return
     * Default: 10
     */
    readonly numResults?: number;

    /** Whether to rerank results using a reranker model for improved relevance */
    readonly enableReranking?: boolean;

    /**
     * Name of the reranker model to use
     * Default: "databricks_reranker"
     */
    readonly rerankerModel?: string;

    /** Comma-separated list of columns to use for reranking (e.g., "content,title") */
    readonly columnsToRerank?: string;

    /** Default: {} */
    readonly options?: { filterExpression?: string, scoreThreshold?: number };

}
