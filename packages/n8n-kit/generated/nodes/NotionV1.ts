// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Notion/v1/NotionV1.node.ts' node

export const name = "notion" as const;
export const description = "Consume Notion API" as const;
export const version = 1 as const;
export const defaults = {"name":"Notion"} as const;
export const credentials = [{"name":"notionApi","required":true}] as const

/**
 * Consume Notion API
 */
export interface NotionV1NodeParameters {

    /**
     */
    readonly notionNotice?: string;

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
    readonly options?: { "sort"?: { "sortValue": any }, "iconType"?: "emoji" | "file", "icon"?: string, "filter"?: { "filters": any } };

    /**
     * The Notion Page to archive
     * Default: {"mode":"url","value":""}
     */
    readonly pageId?: any;

    /**
     * Page title. Appears at the top of the page and can be found via Quick Find.
     */
    readonly title?: string;

    /**
     */
    readonly userId?: string;


}

