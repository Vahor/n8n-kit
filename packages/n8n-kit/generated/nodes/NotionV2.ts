// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Notion/v2/NotionV2.node.ts' node

export const name = "notion" as const;
export const description = "Consume Notion API" as const;
export const version = 2.2 as const;
export const defaults = {"name":"Notion"} as const;
export const credentials = [{"name":"notionApi","required":true}] as const

/**
 * Consume Notion API
 */
export interface NotionV2NodeParameters {

    /**
     */
    readonly notionNotice?: string;

    /**
     */
    readonly Credentials?: any;

    /**
     * Default: "page"
     */
    readonly resource?: "block" | "database" | "databasePage" | "page" | "user";

    /**
     * Default: "append"
     */
    readonly operation?: "append" | "getAll" | "get" | "getAll" | "search" | "create" | "update" | "archive";

    /**
     * The Notion Block to append blocks to
     * Default: {"mode":"url","value":""}
     */
    readonly blockId?: any;

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

    /**
     */
    readonly fetchNestedBlocks?: boolean;

    /**
     * Default: true
     */
    readonly simplifyOutput?: boolean;

    /**
     * The Notion Database to get
     * Default: {"mode":"list","value":""}
     */
    readonly databaseId?: any;

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
    readonly options?: { "sort"?: { "sortValue": any }, "iconType"?: "emoji" | "file", "icon"?: string, "downloadFiles"?: boolean, "filter"?: { "singleCondition": any, "multipleCondition": any } };

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
    readonly pageId?: any;

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

    /**
     */
    readonly jsonNotice?: string;

    /**
     */
    readonly filterJson?: string;

    /**
     */
    readonly userId?: string;


}

