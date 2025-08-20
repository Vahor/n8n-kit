// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Airtable/v2/AirtableV2.node.ts' node

export const name = "airtable" as const;
export const description = "Read, update, write and delete data from Airtable" as const;
export const version = 2.1 as const;
export const defaults = {"name":"Airtable"} as const;
export const credentials = [{"name":"airtableTokenApi","required":true,"displayOptions":{"show":{"authentication":["airtableTokenApi"]}}},{"name":"airtableOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["airtableOAuth2Api"]}}}] as const

/**
 * Read, update, write and delete data from Airtable
 */
export interface AirtableV2NodeParameters {

    /**
     * Default: "airtableTokenApi"
     */
    readonly authentication?: "airtableTokenApi" | "airtableOAuth2Api";

    /**
     * Default: "record"
     */
    readonly resource?: "base" | "record";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "upsert" | "deleteRecord" | "get" | "search" | "update" | "getMany" | "getSchema";


}

