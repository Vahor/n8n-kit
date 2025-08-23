// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MongoDb/MongoDb.node.ts' node

export const description = "Find, insert and update documents in MongoDB" as const;
export const type = "n8n-nodes-base.mongoDb" as const;
export const version = 1.2 as const;
export const credentials = [{"name":"mongoDb","required":true,"testedBy":"mongoDbCredentialTest"}] as const;

/**
 * Find, insert and update documents in MongoDB
 */
export interface MongoDbNodeParameters {

    /**
     * Default: "document"
     */
    readonly resource?: "searchIndexes" | "document";

    /**
     * Default: "find"
     */
    readonly operation?: "aggregate" | "delete" | "find" | "findOneAndReplace" | "findOneAndUpdate" | "insert" | "update" | "createSearchIndex" | "dropSearchIndex" | "listSearchIndexes" | "updateSearchIndex";

    /**
     * MongoDB Collection
     */
    readonly collection?: string;

    /**
     * MongoDB aggregation pipeline query in JSON format
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly query?: string;

    /**
     * Add query options
     * Default: {}
     */
    readonly options?: { "limit"?: number, "skip"?: number, "sort"?: string, "projection"?: string } | { "dateFields"?: string, "useDotNotation"?: boolean };

    /**
     * Comma-separated list of the fields to be included into the new document
     */
    readonly fields?: string;

    /**
     * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
     * Default: "id"
     */
    readonly updateKey?: string;

    /**
     * Whether to perform an insert if no documents match the update key
     */
    readonly upsert?: boolean;

    /**
     * If provided, only lists indexes with the specified name
     */
    readonly indexName?: string;

    /**
     * The name of the search index
     */
    readonly indexNameRequired?: string;

    /**
     * The search index definition
     * Default: "{}"
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly indexDefinition?: string;

    /**
     * The search index index type
     * Default: "vectorSearch"
     */
    readonly indexType?: "vectorSearch" | "search";


}

