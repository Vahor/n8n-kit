// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Airtable/AirtableTrigger.node.ts' node

export const description = "Starts the workflow when Airtable events occur" as const;
export const type = "n8n-nodes-base.airtableTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"airtableApi","required":true,"displayOptions":{"show":{"authentication":["airtableApi"]}}},{"name":"airtableTokenApi","required":true,"displayOptions":{"show":{"authentication":["airtableTokenApi"]}}},{"name":"airtableOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["airtableOAuth2Api"]}}}] as const;

/**
 * Starts the workflow when Airtable events occur
 */
export interface AirtableTriggerNodeParameters {

    /**
     * Default: "airtableApi"
     */
    readonly authentication?: "airtableApi" | "airtableTokenApi" | "airtableOAuth2Api";

    /**
     * The Airtable Base in which to operate on
     * Default: {"mode":"url","value":""}
     */
    readonly baseId?: any;

    /**
     * Default: {"mode":"url","value":""}
     */
    readonly tableId?: any;

    /**
     * A Created Time or Last Modified Time field that will be used to sort records. If you do not have a Created Time or Last Modified Time field in your schema, please create one, because without this field trigger will not work correctly.
     */
    readonly triggerField?: string;

    /**
     * Whether the attachment fields define in 'Download Fields' will be downloaded
     */
    readonly downloadAttachments?: boolean;

    /**
     * Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
     */
    readonly downloadFieldNames?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "fields"?: string, "formula"?: string, "viewId"?: string };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

