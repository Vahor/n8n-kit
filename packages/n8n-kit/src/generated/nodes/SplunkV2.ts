// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Splunk/v2/SplunkV2.node.ts' node

export const name = "splunk" as const;
export const description = "Consume the Splunk Enterprise API" as const;
export const version = 2 as const;
export const credentials = [{"name":"splunkApi","required":true}] as const;

/**
 * Consume the Splunk Enterprise API
 */
export interface SplunkV2NodeParameters {

    /**
     * Default: "search"
     */
    readonly resource?: "alert" | "report" | "search" | "user";

    /**
     * Default: "getReport"
     */
    readonly operation?: "getReport" | "getMetrics" | "create" | "deleteReport" | "get" | "getAll" | "create" | "deleteJob" | "get" | "getAll" | "getResult" | "create" | "deleteUser" | "get" | "getAll" | "update";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly searchJobId?: any;

    /**
     * The name of the report
     */
    readonly name?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly reportId?: any;

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
    readonly options?: { "add_orphan_field"?: boolean, "listDefaultActionArgs"?: boolean } | { "add_summary_to_metadata"?: boolean };

    /**
     * Search language string to execute, in Splunk's <a href="https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/WhatsInThisManual">Search Processing Language</a>
     * Type options: {"rows":2}
     */
    readonly search?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "adhoc_search_level"?: "fast" | "smart" | "verbose", "auto_cancel"?: number, "auto_finalize_ec"?: number, "auto_pause"?: number, "index_earliest"?: string, "earliest_time"?: string, "exec_mode"?: "blocking" | "normal" | "oneshot", "indexedRealtimeOffset"?: number, "index_latest"?: string, "latest_time"?: string, "max_time"?: number, "namespace"?: string, "reduce_freq"?: number, "remote_server_list"?: string, "reuse_max_seconds_ago"?: number, "rf"?: string, "search_mode"?: "normal" | "realtime", "status_buckets"?: number, "timeout"?: number, "workload_pool"?: string } | { "email"?: string, "realname"?: string };

    /**
     * Default: {}
     */
    readonly sort?: { "values": any };

    /**
     * Default: {}
     */
    readonly filters?: { "keyValueMatch"?: { "keyValuePair": any } };

    /**
     * Comma-separated list of roles to assign to the user. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: ["user"]
     * Type options: {"loadOptionsMethod":"getRoles"}
     */
    readonly roles?: any[];

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly userId?: any;

    /**
     * Default: {}
     */
    readonly updateFields?: { "email"?: string, "realname"?: string, "password"?: string, "roles"?: any[] };


}

