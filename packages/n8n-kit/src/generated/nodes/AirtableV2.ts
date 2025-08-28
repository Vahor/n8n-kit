// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Airtable/v2/AirtableV2.node.ts' node

export const description = "Read, update, write and delete data from Airtable" as const;
export const type = "n8n-nodes-base.airtable" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"airtableTokenApi","required":true,"displayOptions":{"show":{"authentication":["airtableTokenApi"]}}},{"name":"airtableOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["airtableOAuth2Api"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AirtableV2NodeParameters {
    /** Default: "airtableTokenApi" */
    readonly authentication?: "airtableTokenApi" | "airtableOAuth2Api";

    /** Default: "record" */
    readonly resource?: "base" | "record";

    /** Default: "get" */
    readonly operation?: "create" | "upsert" | "deleteRecord" | "get" | "search" | "update" | "getMany" | "getSchema";

    /** Default: {"mode":"list","value":""} */
    readonly base?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["base.value"]}
     */
    readonly table?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {} */
    readonly options?: { typecast?: boolean, ignoreFields?: string, updateAllMatches?: boolean } | { downloadFields?: unknown[] } | { downloadFields?: unknown[], fields?: unknown[], view?: {
	value: string,
	mode: "list" | "url" | "id",
} } | { permissionLevel?: ("comment" | "create" | "edit" | "none" | "read")[] };

    /** ID of the record to delete. <a href="https://support.airtable.com/docs/record-id" target="_blank">More info</a>. */
    readonly id?: string;

    /** The formula will be evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response. <a href="https://support.airtable.com/docs/formula-field-reference" target="_blank">More info</a>. */
    readonly filterByFormula?: string;

    /**
     * Whether to return all results or only up to a given limit
     * Default: true
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Defines how the returned records should be ordered
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sort?: { property: Array<{ field?: string, direction?: "asc" | "desc" }> };

}
