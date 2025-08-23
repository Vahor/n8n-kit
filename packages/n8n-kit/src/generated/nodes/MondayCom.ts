// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MondayCom/MondayCom.node.ts' node

export const description = "Consume Monday.com API" as const;
export const type = "n8n-nodes-base.mondayCom" as const;
export const version = 1 as const;
export const credentials = [{"name":"mondayComApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"mondayComOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Consume Monday.com API
 */
export interface MondayComNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "board"
     */
    readonly resource?: "board" | "boardColumn" | "boardGroup" | "boardItem";

    /**
     * Default: "create"
     */
    readonly operation?: "archive" | "create" | "get" | "getAll" | "create" | "getAll" | "delete" | "create" | "getAll" | "addUpdate" | "changeColumnValue" | "changeMultipleColumnValues" | "create" | "delete" | "get" | "getByColumnValue" | "getAll" | "move";

    /**
     * Board unique identifiers. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoards"}
     */
    readonly boardId?: string;

    /**
     * The board's name
     */
    readonly name?: string;

    /**
     * The board's kind (public / private / share)
     */
    readonly kind?: "share" | "public" | "private";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "templateId"?: number } | { "defaults"?: string } | { "columnValues"?: string };

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

    readonly title?: string;

    readonly columnType?: "checkbox" | "country" | "date" | "dropdown" | "email" | "hour" | "Link" | "longText" | "numbers" | "people" | "person" | "phone" | "rating" | "status" | "tags" | "team" | "text" | "timeline" | "timezone" | "week" | "worldClock";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getGroups","loadOptionsDependsOn":["boardId"]}
     */
    readonly groupId?: string;

    /**
     * The unique identifier of the item to add update to
     */
    readonly itemId?: string;

    /**
     * The update text to add
     */
    readonly value?: string;

    /**
     * The column's unique identifier. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getColumns","loadOptionsDependsOn":["boardId"]}
     */
    readonly columnId?: string;

    /**
     * The column fields and values in JSON format. Documentation can be found <a href="https://monday.com/developers/v2#mutations-section-columns-change-multiple-column-values">here</a>.
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly columnValues?: string;

    /**
     * The column value to search items by
     */
    readonly columnValue?: string;


}

