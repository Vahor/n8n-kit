// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Airtable/v1/AirtableV1.node.ts' node

export const description = "Read, update, write and delete data from Airtable" as const;
export const type = "n8n-nodes-base.airtable" as const;
export const version = 1 as const;
export const credentials = [{"name":"airtableApi","required":true,"displayOptions":{"show":{"authentication":["airtableApi"]}}},{"name":"airtableTokenApi","required":true,"displayOptions":{"show":{"authentication":["airtableTokenApi"]}}},{"name":"airtableOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["airtableOAuth2Api"]}}}] as const;
export const outputs = {"main":"main"} as const;

export interface AirtableV1NodeParameters {

    /**
     * Default: "airtableApi"
     */
    readonly authentication?: "airtableTokenApi" | "airtableOAuth2Api" | "airtableApi";

    readonly oldVersionNotice?: string;

    readonly deprecated?: string;

    /**
     * Default: "read"
     */
    readonly operation?: "append" | "delete" | "list" | "read" | "update";

    /**
     * The Airtable Base in which to operate on
     * Default: {"mode":"url","value":""}
     */
    readonly application?: {
	value: string,
	mode: "url" | "id",
};

    /**
     * Default: {"mode":"url","value":""}
     */
    readonly table?: {
	value: string,
	mode: "url" | "id",
};

    /**
     * Whether all fields should be sent to Airtable or only specific ones
     * Default: true
     */
    readonly addAllFields?: boolean;

    /**
     * The name of fields for which data should be sent to Airtable
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Field"}
     */
    readonly fields?: string;

    /**
     * ID of the record to delete
     */
    readonly id?: string;

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
     * Whether the attachment fields define in 'Download Fields' will be downloaded
     */
    readonly downloadAttachments?: boolean;

    /**
     * Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive and cannot include spaces after a comma.
     */
    readonly downloadFieldNames?: string;

    /**
     * Additional options which decide which records should be returned
     * Default: {}
     */
    readonly additionalOptions?: { "fields"?: string, "filterByFormula"?: string, "sort"?: { "property": any }, "view"?: string };

    /**
     * Whether all fields should be sent to Airtable or only specific ones
     * Default: true
     */
    readonly updateAllFields?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "bulkSize"?: number, "ignoreFields"?: string, "typecast"?: boolean };


}

