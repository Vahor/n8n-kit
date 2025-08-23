// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Notion/NotionTrigger.node.ts' node

export const name = "notionTrigger" as const;
export const description = "Starts the workflow when Notion events occur" as const;
export const version = 1 as const;
export const credentials = [{"name":"notionApi","required":true}] as const;

/**
 * Starts the workflow when Notion events occur
 */
export interface NotionTriggerNodeParameters {

    /**
     * Default: "pageAddedToDatabase"
     */
    readonly event: "pageAddedToDatabase" | "pagedUpdatedInDatabase";

    readonly notionNotice?: string;

    /**
     * The Notion Database to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly databaseId?: any;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

