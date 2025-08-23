// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Notion/v1/NotionV1.node.ts' node

export const description = "Consume Notion API" as const;
export const type = "n8n-nodes-base.notion" as const;
export const version = 1 as const;
export const credentials = [{"name":"notionApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NotionV1NodeParameters {
    readonly notionNotice?: string;

    /**
     * Default: "page"
     */
    readonly resource?: "block" | "database" | "databasePage" | "page" | "user";

    /**
     * Default: "append"
     */
    readonly operation?: "append" | "getAll" | "get" | "getAll" | "search" | "get" | "getAll" | "create" | "get" | "getAll" | "update" | "create" | "getAll" | "update" | "create" | "get" | "search" | "archive" | "create" | "search";

    /**
     * The Notion Block to append blocks to
     * Default: {"mode":"url","value":""}
     */
    readonly blockId?: {
	value: string,
	mode: "url" | "id",
};

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly blockUi?: { "blockValues": any };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    readonly fetchNestedBlocks?: boolean;

    /**
     * Default: true
     */
    readonly simplifyOutput?: boolean;

    /**
     * The Notion Database to get
     * Default: {"mode":"list","value":""}
     */
    readonly databaseId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * The text to search for
     */
    readonly text?: string;

    /**
     * Default: {}
     */
    readonly options?: { "sort"?: { "sortValue": any } } | { "iconType"?: "emoji" | "file", "icon"?: string } | { "downloadFiles"?: boolean, "filter"?: { "singleCondition": any, "multipleCondition": any }, "sort"?: { "sortValue": any } } | { "filter"?: { "filters": any }, "sort"?: { "sortValue": any } };

    /**
     * Page title. Appears at the top of the page and can be found via Quick Find.
     */
    readonly title?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly propertiesUi?: { "propertyValues": any };

    /**
     * The Notion Database Page to update
     * Default: {"mode":"url","value":""}
     */
    readonly pageId?: {
	value: string,
	mode: "url" | "id",
} | string;

    /**
     * Default: "none"
     */
    readonly filterType?: "none" | "manual" | "json";

    /**
     * Default: "anyFilter"
     */
    readonly matchType?: "anyFilter" | "allFilters";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "conditions": any };

    readonly jsonNotice?: string;

    readonly filterJson?: string;

    readonly userId?: string;

}
