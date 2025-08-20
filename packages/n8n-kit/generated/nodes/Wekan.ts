// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Wekan/Wekan.node.js' node

export const name = "wekan" as const;
export const description = "Consume Wekan API" as const;
export const version = 1 as const;
export const defaults = {"name":"Wekan"} as const;
export const credentials = [{"name":"wekanApi","required":true}] as const

/**
 * Consume Wekan API
 */
export interface WekanNodeParameters {

    /**
     * Default: "card"
     */
    readonly resource?: "board" | "card" | "cardComment" | "checklist" | "checklistItem" | "list";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The title of the board
     */
    readonly title?: string;

    /**
     * The user ID in Wekan. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly owner?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "isActive"?: boolean, "isAdmin"?: boolean, "color"?: "belize" | "midnight" | "nephritis" | "pomegranate" | "pumpkin" | "wisteria", "isCommentOnly"?: boolean, "isNoComments"?: boolean, "permission"?: "private" | "public", "isWorker"?: boolean, "assignees"?: string[], "description"?: string, "members"?: string[] };

    /**
     * The ID of the board to delete
     */
    readonly boardId?: string;

    /**
     * The ID of the user that boards are attached. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly IdUser?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":200}
     */
    readonly limit?: number;

    /**
     * The ID of the list to create card in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLists","loadOptionsDependsOn":["boardId"]}
     */
    readonly listId?: string;

    /**
     * The swimlane ID of the new card. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSwimlanes","loadOptionsDependsOn":["boardId"]}
     */
    readonly swimlaneId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly authorId?: string;

    /**
     * The ID of the card to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCards","loadOptionsDependsOn":["boardId","listId"]}
     */
    readonly cardId?: string;

    /**
     */
    readonly fromObject?: "list" | "swimlane";

    /**
     * Default: {}
     */
    readonly updateFields?: { "authorId"?: string, "assignees"?: string[], "color"?: "black" | "blue" | "crimson" | "darkgreen" | "gold" | "gray" | "green" | "indigo" | "lime" | "magenta" | "mistyrose" | "navy" | "orange" | "paleturquoise" | "peachpuff" | "pink" | "plum" | "purple" | "red" | "saddlebrown" | "silver" | "sky" | "slateblue" | "white" | "yellow", "description"?: string, "dueAt"?: string, "endAt"?: string, "labelIds"?: string, "listId"?: string, "members"?: string[], "isOverTime"?: boolean, "parentId"?: string, "receivedAt"?: string, "sort"?: number, "spentTime"?: number, "startAt"?: string, "swimlaneId"?: string, "title"?: string, "isFinished"?: boolean };

    /**
     * The comment text
     */
    readonly comment?: string;

    /**
     * The ID of the comment to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getComments","loadOptionsDependsOn":["boardId","cardId"]}
     */
    readonly commentId?: string;

    /**
     * Items to be added to the checklist
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Item"}
     */
    readonly items?: string;

    /**
     * The ID of the checklist to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getChecklists","loadOptionsDependsOn":["boardId","cardId"]}
     */
    readonly checklistId?: string;

    /**
     * The ID of the checklistItem item to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getChecklistItems","loadOptionsDependsOn":["boardId","cardId","checklistId"]}
     */
    readonly checklistItemId?: string;


}

