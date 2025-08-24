// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Elastic/Elasticsearch/Elasticsearch.node.ts' node

export const description = "Consume the Elasticsearch API" as const;
export const type = "n8n-nodes-base.elasticsearch" as const;
export const version = 1 as const;
export const credentials = [{"name":"elasticsearchApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ElasticsearchNodeParameters {
    /** Default: "document" */
    readonly resource?: "document" | "index";

    /** Default: "get" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll";

    /** ID of the index containing the document to delete */
    readonly indexId?: string;

    /** ID of the document to delete */
    readonly documentId?: string;

    /** Default: {} */
    readonly options?: { "bulkOperation"?: boolean } | { "_source_excludes"?: string, "_source_includes"?: string, "stored_fields"?: boolean } | { "allow_no_indices"?: boolean, "allow_partial_search_results"?: boolean, "batched_reduce_size"?: number, "ccs_minimize_roundtrips"?: boolean, "docvalue_fields"?: string, "expand_wildcards"?: "all" | "closed" | "hidden" | "none" | "open", "explain"?: boolean, "ignore_throttled"?: boolean, "ignore_unavailable"?: boolean, "max_concurrent_shard_requests"?: number, "pre_filter_shard_size"?: number, "query"?: string, "request_cache"?: boolean, "routing"?: string, "search_type"?: "dfs_query_then_fetch" | "query_then_fetch", "seq_no_primary_term"?: boolean, "sort"?: string, "_source_excludes"?: string, "_source_includes"?: string, "stats"?: string, "stored_fields"?: boolean, "terminate_after"?: number, "timeout"?: string, "track_scores"?: boolean, "track_total_hits"?: number, "version"?: boolean } | { "bulkOperation"?: boolean, "pipeline"?: string, "refresh"?: "true" | "wait_for" | "false" } | { "bulkOperation"?: boolean, "refresh"?: "true" | "wait_for" | "false" };

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataToSend?: "defineBelow" | "autoMapInputData";

    /** List of input properties to avoid sending, separated by commas. Leave empty to send all properties. */
    readonly inputsToIgnore?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { "fieldValues": any };

    /** Default: {} */
    readonly additionalFields?: { "documentId"?: string, "routing"?: string, "timeout"?: string } | { "aliases"?: string, "include_type_name"?: boolean, "mappings"?: string, "master_timeout"?: string, "settings"?: string, "timeout"?: string, "wait_for_active_shards"?: string } | { "allow_no_indices"?: boolean, "expand_wildcards"?: "all" | "closed" | "hidden" | "none" | "open", "flat_settings"?: boolean, "ignore_unavailable"?: boolean, "include_defaults"?: boolean, "local"?: boolean, "master_timeout"?: string };

}
