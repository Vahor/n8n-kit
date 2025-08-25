// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Notion/v2/NotionV2.node.ts' node

export const description = "Consume Notion API" as const;
export const type = "n8n-nodes-base.notion" as const;
export const version = 2.2 as const;
export const credentials = [{"name":"notionApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NotionV2NodeParameters {
    /** Default: "page" */
    readonly resource?: "block" | "database" | "databasePage" | "page" | "user";

    /** Default: "append" */
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
    readonly blockUi?: { blockValues: { type?: string, richText?: boolean, textContent?: string, text?: { text: { textType?: "equation" | "mention" | "text", text?: string, isLink?: boolean, textLink?: string, mentionType?: "database" | "date" | "page" | "user", user?: string, page?: string, database?: {
	value: string,
	mode: "list" | "url" | "id",
}, range?: boolean, date?: string, dateStart?: string, dateEnd?: string, expression?: string, annotationUi?: { bold?: boolean, italic?: boolean, strikethrough?: boolean, underline?: boolean, code?: boolean, color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background" } } }, checked?: boolean, title?: string, url?: string } };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    readonly fetchNestedBlocks?: boolean;

    /** Default: true */
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

    /** The text to search for */
    readonly text?: string;

    /** Default: {} */
    readonly options?: { sort?: { sortValue: { direction?: "ascending" | "descending", timestamp?: "last_edited_time" } } } | { iconType?: "emoji" | "file", icon?: string } | { downloadFiles?: boolean, filter?: { singleCondition: { key?: string, type?: any, condition?: "equals" | "does_not_equal" | "contains" | "does_not_contain" | "starts_with" | "ends_with" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "greater_than" | "less_than" | "greater_than_or_equal_to" | "less_than_or_equal_to" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "equals" | "does_not_equal" | "is_empty" | "is_not_empty" | "contains" | "does_not_equal" | "is_empty" | "is_not_empty" | "equals" | "before" | "after" | "on_or_before" | "is_empty" | "is_not_empty" | "on_or_after" | "past_week" | "past_month" | "past_year" | "next_week" | "next_month" | "next_year" | "contains" | "does_not_contain" | "is_empty" | "is_not_empty" | "is_empty" | "is_not_empty", returnType?: "text" | "checkbox" | "number" | "date", titleValue?: string, richTextValue?: string, phoneNumberValue?: string, multiSelectValue?: string, selectValue?: string, statusValue?: string, emailValue?: string, urlValue?: string, peopleValue?: string, createdByValue?: string, lastEditedByValue?: string, relationValue?: string, checkboxValue?: boolean, numberValue?: number, date?: string, createdTimeValue?: string, lastEditedTime?: string, textValue?: string, dateValue?: string }, multipleCondition: { condition?: { or: { key?: string, type?: any, condition?: "equals" | "does_not_equal" | "contains" | "does_not_contain" | "starts_with" | "ends_with" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "greater_than" | "less_than" | "greater_than_or_equal_to" | "less_than_or_equal_to" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "equals" | "does_not_equal" | "is_empty" | "is_not_empty" | "contains" | "does_not_equal" | "is_empty" | "is_not_empty" | "equals" | "before" | "after" | "on_or_before" | "is_empty" | "is_not_empty" | "on_or_after" | "past_week" | "past_month" | "past_year" | "next_week" | "next_month" | "next_year" | "contains" | "does_not_contain" | "is_empty" | "is_not_empty" | "is_empty" | "is_not_empty", returnType?: "text" | "checkbox" | "number" | "date", titleValue?: string, richTextValue?: string, phoneNumberValue?: string, multiSelectValue?: string, selectValue?: string, statusValue?: string, emailValue?: string, urlValue?: string, peopleValue?: string, createdByValue?: string, lastEditedByValue?: string, relationValue?: string, checkboxValue?: boolean, numberValue?: number, date?: string, createdTimeValue?: string, lastEditedTime?: string, textValue?: string, dateValue?: string }, and: { key?: string, type?: any, condition?: "equals" | "does_not_equal" | "contains" | "does_not_contain" | "starts_with" | "ends_with" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "greater_than" | "less_than" | "greater_than_or_equal_to" | "less_than_or_equal_to" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "equals" | "does_not_equal" | "is_empty" | "is_not_empty" | "contains" | "does_not_equal" | "is_empty" | "is_not_empty" | "equals" | "before" | "after" | "on_or_before" | "is_empty" | "is_not_empty" | "on_or_after" | "past_week" | "past_month" | "past_year" | "next_week" | "next_month" | "next_year" | "contains" | "does_not_contain" | "is_empty" | "is_not_empty" | "is_empty" | "is_not_empty", returnType?: "text" | "checkbox" | "number" | "date", titleValue?: string, richTextValue?: string, phoneNumberValue?: string, multiSelectValue?: string, selectValue?: string, statusValue?: string, emailValue?: string, urlValue?: string, peopleValue?: string, createdByValue?: string, lastEditedByValue?: string, relationValue?: string, checkboxValue?: boolean, numberValue?: number, date?: string, createdTimeValue?: string, lastEditedTime?: string, textValue?: string, dateValue?: string } } } }, sort?: { sortValue: { timestamp?: boolean, key?: string | "created_time" | "last_edited_time", type?: any, direction?: "ascending" | "descending" } } } | { filter?: { filters: { property?: "object", value?: "database" | "page" } }, sort?: { sortValue: { direction?: "ascending" | "descending", timestamp?: "last_edited_time" } } };

    /** Page title. Appears at the top of the page and can be found via Quick Find. */
    readonly title?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly propertiesUi?: { propertyValues: { key?: string, type?: any, title?: string, richText?: boolean, textContent?: string, text?: { text: { textType?: "equation" | "mention" | "text", text?: string, isLink?: boolean, textLink?: string, mentionType?: "database" | "date" | "page" | "user", user?: string, page?: string, database?: {
	value: string,
	mode: "list" | "url" | "id",
}, range?: boolean, date?: string, dateStart?: string, dateEnd?: string, expression?: string, annotationUi?: { bold?: boolean, italic?: boolean, strikethrough?: boolean, underline?: boolean, code?: boolean, color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background" } } }, phoneValue?: string, multiSelectValue?: any[], selectValue?: string, statusValue?: string, emailValue?: string, ignoreIfEmpty?: boolean, urlValue?: string, peopleValue?: any[], relationValue?: string, checkboxValue?: boolean, numberValue?: number, range?: boolean, includeTime?: boolean, date?: string, dateStart?: string, dateEnd?: string, timezone?: string, fileUrls?: { fileUrl: { name?: string, url?: string } } } };

    /**
     * The Notion Database Page to update
     * Default: {"mode":"url","value":""}
     */
    readonly pageId?: {
	value: string,
	mode: "url" | "id",
} | string;

    /** Default: "none" */
    readonly filterType?: "none" | "manual" | "json";

    /** Default: "anyFilter" */
    readonly matchType?: "anyFilter" | "allFilters";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { conditions: { key?: string, type?: any, condition?: "equals" | "does_not_equal" | "contains" | "does_not_contain" | "starts_with" | "ends_with" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "greater_than" | "less_than" | "greater_than_or_equal_to" | "less_than_or_equal_to" | "is_empty" | "is_not_empty" | "equals" | "does_not_equal" | "equals" | "does_not_equal" | "is_empty" | "is_not_empty" | "contains" | "does_not_equal" | "is_empty" | "is_not_empty" | "equals" | "before" | "after" | "on_or_before" | "is_empty" | "is_not_empty" | "on_or_after" | "past_week" | "past_month" | "past_year" | "next_week" | "next_month" | "next_year" | "contains" | "does_not_contain" | "is_empty" | "is_not_empty" | "is_empty" | "is_not_empty", returnType?: "text" | "checkbox" | "number" | "date", titleValue?: string, richTextValue?: string, phoneNumberValue?: string, multiSelectValue?: string, selectValue?: string, statusValue?: string, emailValue?: string, urlValue?: string, peopleValue?: string, createdByValue?: string, lastEditedByValue?: string, relationValue?: string, checkboxValue?: boolean, numberValue?: number, date?: string, createdTimeValue?: string, lastEditedTime?: string, textValue?: string, dateValue?: string } };

    readonly filterJson?: string;

    readonly userId?: string;

}
