// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/BigQuery/v1/GoogleBigQueryV1.node.ts' node

export const description = "Consume Google BigQuery API" as const;
export const type = "n8n-nodes-base.googleBigQuery" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleBigQueryOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Consume Google BigQuery API
 */
export interface GoogleBigQueryV1NodeParameters {

    readonly oldVersionNotice?: string;

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "record"
     */
    readonly resource?: "record";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "getAll";

    /**
     * ID of the project to create the record in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId?: string;

    /**
     * ID of the dataset to create the record in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDatasets","loadOptionsDependsOn":["projectId"]}
     */
    readonly datasetId?: string;

    /**
     * ID of the table to create the record in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTables","loadOptionsDependsOn":["projectId","datasetId"]}
     */
    readonly tableId?: string;

    /**
     * Comma-separated list of the item properties to use as columns
     */
    readonly columns?: string;

    /**
     * Default: {}
     */
    readonly options?: { "ignoreUnknownValues"?: boolean, "skipInvalidRows"?: boolean, "templateSuffix"?: string, "traceId"?: string } | { "selectedFields"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;


}

