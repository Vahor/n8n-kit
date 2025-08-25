// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/BigQuery/v2/GoogleBigQueryV2.node.ts' node

export const description = "Consume Google BigQuery API" as const;
export const type = "n8n-nodes-base.googleBigQuery" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleBigQueryOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleBigQueryV2NodeParameters {
    /** Default: "oAuth2" */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /** Default: "executeQuery" */
    readonly operation?: "executeQuery" | "insert";

    /**
     * Projects to which you have been granted any project role
     * Default: {"mode":"list","value":""}
     */
    readonly projectId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {"mode":"list","value":""} */
    readonly datasetId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {"mode":"list","value":""} */
    readonly tableId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * SQL query to execute, you can find more information <a href="https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax" target="_blank">here</a>. Standard SQL syntax used by default, but you can also use Legacy SQL syntax by using optinon 'Use Legacy SQL'.
     * Type options: {"editor":"sqlEditor"}
     */
    readonly sqlQuery?: string;

    /** Default: {} */
    readonly options?: { defaultDataset?: string, dryRun?: boolean, includeSchema?: boolean, location?: string, maximumBytesBilled?: string, maxResults?: number, timeoutMs?: number, rawOutput?: boolean, useLegacySql?: boolean, returnAsNumbers?: boolean, queryParameters?: { namedParameters: Array<{ name?: string, value?: string }> } } | { batchSize?: number, ignoreUnknownValues?: boolean, skipInvalidRows?: boolean, templateSuffix?: string, traceId?: string };

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "autoMap"
     */
    readonly dataMode?: "autoMap" | "define";

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field","multipleValues":true}
     */
    readonly fieldsUi?: { values: Array<{ fieldId?: string, fieldValue?: string }> };

}
