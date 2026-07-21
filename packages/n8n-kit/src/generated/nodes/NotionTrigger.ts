// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Notion/NotionTrigger.node.ts' node

export const description = "Starts the workflow when Notion events occur" as const;
export const type = "n8n-nodes-base.notionTrigger" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"notionApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"notionOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface NotionTriggerNodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth2";

    /** Default: "pageAddedToDatabase" */
    readonly event?: "pageAddedToDatabase" | "pagedUpdatedInDatabase";

    /**
     * The Notion Database to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly databaseId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * The Notion Data Source to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly dataSourceId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
