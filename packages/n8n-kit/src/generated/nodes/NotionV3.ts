// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Notion/v3/NotionV3.node.ts' node

export const description = "Consume Notion API" as const;
export const type = "n8n-nodes-base.notion" as const;
export const version = 3 as const;
export const credentials = [{"name":"notionApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"notionOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NotionV3NodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth2";

    /** Default: "page" */
    readonly resource?: "block" | "dataSource" | "database" | "databasePage" | "page" | "user";

    /** Default: "append" */
    readonly operation?: "append" | "getMarkdown" | "getAll" | "get" | "search" | "get" | "create" | "get" | "getAll" | "update" | "archive" | "create" | "getMarkdown" | "search" | "updateMarkdown" | "get" | "getAll";

    /**
     * The Notion block to append blocks to
     * Default: {"mode":"url","value":""}
     */
    readonly blockId?: {
	value: string,
	mode: "url" | "id",
};

    /** ID of the block after which to insert the new blocks. Leave empty to append at the end. */
    readonly afterBlockId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly blockUi?: { blockValues: Array<{ type?: string, richText?: boolean, textContent?: string, text?: { text: Array<{ textType?: "equation" | "mention" | "text", text?: string, isLink?: boolean, textLink?: string, mentionType?: "database" | "date" | "page" | "user", user?: string, page?: string, database?: {
	value: string,
	mode: "list" | "url" | "id",
}, range?: boolean, date?: string, dateStart?: string, dateEnd?: string, expression?: string, annotationUi?: { bold?: boolean, italic?: boolean, strikethrough?: boolean, underline?: boolean, code?: boolean, color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background" } }> }, checked?: boolean, title?: string, url?: string }> };

    readonly includeTranscript?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    readonly fetchNestedBlocks?: boolean;

    /** Default: true */
    readonly simplifyOutput?: boolean;

    /**
     * The Notion data source to retrieve
     * Default: {"mode":"list","value":""}
     */
    readonly dataSourceId?: {
	value: string,
	mode: "list" | "id",
};

    /** Text to search databases/data sources for */
    readonly text?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Default: {} */
    readonly options?: { sort?: { sortValue: { direction?: "ascending" | "descending", timestamp?: "last_edited_time" } } } | { icon?: string } | { sort?: { sortValue: Array<{ timestamp?: boolean, key?: string | "created_time" | "last_edited_time", type?: unknown, direction?: "ascending" | "descending" }> }, downloadFiles?: boolean };

    /**
     * The Notion database to retrieve. Use Data Source operations to search, query, or create database pages.
     * Default: {"mode":"list","value":""}
     */
    readonly databaseId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {"mode":"url","value":""} */
    readonly pageId?: {
	value: string,
	mode: "url" | "id",
};

    /** Page title */
    readonly title?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly propertiesUi?: { propertyValues: Array<{ key?: string, type?: unknown, title?: string, textContent?: string, numberValue?: number, checkboxValue?: boolean, selectValue?: string, statusValue?: string, multiSelectValue?: string, urlValue?: string, ignoreIfEmpty?: boolean, emailValue?: string, phoneValue?: string, peopleValue?: unknown[], relationValue?: string, range?: boolean, includeTime?: boolean, date?: string, dateStart?: string, dateEnd?: string, timezone?: string, fileUrls?: { fileUrl: Array<{ name?: string, url?: string }> } }> };

    /** Default: "blockUi" */
    readonly contentType?: "blockUi" | "json" | "markdown";

    /** Type options: {"rows":8} */
    readonly blocksJson?: string;

    /** Type options: {"rows":8} */
    readonly markdown?: string;

    /** Default: "none" */
    readonly filterType?: "none" | "manual" | "json";

    /** Default: "anyFilter" */
    readonly matchType?: "anyFilter" | "allFilters";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { conditions: Array<{ key?: string, type?: unknown, condition?: "equals" | "does_not_equal" | "contains" | "does_not_contain" | "is_empty" | "is_not_empty" | "equals" | "before" | "after" | "on_or_before" | "on_or_after" | "is_empty" | "is_not_empty" | "next_month" | "next_week" | "next_year" | "past_month" | "past_week" | "past_year" | "this_week" | "equals" | "does_not_equal" | "contains" | "does_not_contain" | "starts_with" | "ends_with" | "is_empty" | "is_not_empty" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "greater_than" | "less_than" | "greater_than_or_equal_to" | "less_than_or_equal_to" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "greater_than" | "less_than" | "greater_than_or_equal_to" | "less_than_or_equal_to" | "status", returnType?: "checkbox" | "date" | "number" | "string", rollupJson?: string, richTextValue?: string, numberValue?: number, checkboxValue?: boolean, dateValue?: string, optionValue?: string, peopleValue?: string, relationValue?: string, verificationStatus?: "verified" | "expired" | "none" }> };

    /**
     * Default: "{}"
     * Type options: {"rows":8}
     */
    readonly filterJson?: string;

    /** Default: "replace_content" */
    readonly markdownUpdateType?: "replace_content" | "update_content";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly contentUpdates?: { updates: Array<{ oldString?: string, newString?: string, replaceAllMatches?: boolean }> };

    readonly userId?: string;

}
