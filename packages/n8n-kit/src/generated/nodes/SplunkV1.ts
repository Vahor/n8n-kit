// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Splunk/v1/SplunkV1.node.ts' node

export const description = "Consume the Splunk Enterprise API" as const;
export const type = "n8n-nodes-base.splunk" as const;
export const version = 1 as const;
export const credentials = [{"name":"splunkApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SplunkV1NodeParameters {
    readonly oldVersionNotice?: string;

    /**
     * Default: "searchJob"
     */
    readonly resource?: "firedAlert" | "searchConfiguration" | "searchJob" | "searchResult" | "user";

    /**
     * Default: "getReport"
     */
    readonly operation?: "getReport" | "delete" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "getAll" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * ID of the search configuration to delete
     */
    readonly searchConfigurationId?: string;

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
     * Default: {}
     */
    readonly options?: { "add_orphan_field"?: boolean, "listDefaultActionArgs"?: boolean } | { "sort_dir"?: "asc" | "desc", "sort_key"?: string, "sort_mode"?: "auto" | "alpha" | "alpha_case" | "num" } | { "add_summary_to_metadata"?: boolean };

    /**
     * Search language string to execute, in Splunk's <a href="https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/WhatsInThisManual">Search Processing Language</a>
     */
    readonly search?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "adhoc_search_level"?: "fast" | "smart" | "verbose", "auto_cancel"?: number, "auto_finalize_ec"?: number, "auto_pause"?: number, "index_earliest"?: string, "earliest_time"?: string, "exec_mode"?: "blocking" | "normal" | "oneshot", "indexedRealtimeOffset"?: number, "index_latest"?: string, "latest_time"?: string, "max_time"?: number, "namespace"?: string, "reduce_freq"?: number, "remote_server_list"?: string, "reuse_max_seconds_ago"?: number, "rf"?: string, "search_mode"?: "normal" | "realtime", "status_buckets"?: number, "timeout"?: number, "workload_pool"?: string } | { "email"?: string, "realname"?: string };

    /**
     * ID of the search job to delete
     */
    readonly searchJobId?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "keyValueMatch"?: { "keyValuePair": any } };

    /**
     * Login name of the user
     */
    readonly name?: string;

    /**
     * Comma-separated list of roles to assign to the user. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getRoles"}
     */
    readonly roles?: any[];

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * ID of the user to delete
     */
    readonly userId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "email"?: string, "realname"?: string, "password"?: string, "roles"?: any[] };

}
