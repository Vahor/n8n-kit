// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Trello/Trello.node.ts' node

export const name = "trello" as const;
export const description = "Create, change and delete boards and cards" as const;
export const version = 1 as const;
export const defaults = {"name":"Trello"} as const;
export const credentials = [{"name":"trelloApi","required":true}] as const

/**
 * Create, change and delete boards and cards
 */
export interface TrelloNodeParameters {

    /**
     * Default: "card"
     */
    readonly resource?: "attachment" | "board" | "boardMember" | "card" | "cardComment" | "checklist" | "label" | "list";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "add" | "invite" | "remove" | "createCheckItem" | "deleteCheckItem" | "getCheckItem" | "completedCheckItems" | "updateCheckItem" | "addLabel" | "removeLabel" | "archive" | "getCards";

    /**
     * The ID of the card
     * Default: {"mode":"list","value":""}
     */
    readonly cardId?: any;

    /**
     * The URL of the attachment to add
     */
    readonly url?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "mimeType"?: string, "name"?: string, "fields"?: string, "prefs_cardAging"?: "pirate" | "regular", "prefs_background"?: string, "prefs_comments"?: "disabled" | "members" | "observers" | "org" | "public", "prefs_cardCovers"?: boolean, "prefs_invitations"?: "admins" | "members", "keepFromSource"?: string, "defaultLabels"?: boolean, "defaultLists"?: boolean, "idOrganization"?: string, "prefs_permissionLevel"?: "org" | "private" | "public", "powerUps"?: "all" | "calendar" | "cardAging" | "recap" | "voting", "prefs_selfJoin"?: boolean, "idBoardSource"?: string, "prefs_voting"?: "disabled" | "members" | "observers" | "org" | "public", "pluginData"?: boolean, "allowBillableGuest"?: boolean, "type"?: "normal" | "admin" | "observer", "fullName"?: string, "due"?: any, "dueComplete"?: boolean, "pos"?: string, "idMembers"?: string, "idLabels"?: string, "urlSource"?: string, "idCardSource"?: string, "board"?: boolean, "board_fields"?: string, "customFieldItems"?: boolean, "members"?: boolean, "member_fields"?: string, "stickers"?: boolean, "sticker_fields"?: string, "idChecklistSource"?: string, "checked"?: boolean, "state"?: "complete" | "incomplete", "checklistId"?: string, "idListSource"?: string };

    /**
     * The ID of the attachment to delete
     */
    readonly id?: string;

    /**
     * The name of the board
     */
    readonly name?: string;

    /**
     * The description of the board
     */
    readonly description?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "closed"?: boolean, "desc"?: string, "name"?: string, "idOrganization"?: string, "subscribed"?: boolean, "idAttachmentCover"?: string, "idBoard"?: string, "due"?: any, "dueComplete"?: boolean, "idLabels"?: string, "idList"?: string, "idMembers"?: string, "pos"?: string, "color"?: "black" | "blue" | "green" | "lime" | "null" | "orange" | "pink" | "purple" | "red" | "sky" | "yellow" };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * The ID of the member to add to the board
     */
    readonly idMember?: string;

    /**
     * Determines the type of membership the user being added should have
     * Default: "normal"
     */
    readonly type?: "normal" | "admin" | "observer";

    /**
     * The ID of the board to update
     */
    readonly email?: string;

    /**
     * The ID of the list to create card in
     */
    readonly listId?: string;

    /**
     * Text of the comment
     */
    readonly text?: string;

    /**
     * The ID of the comment to delete
     */
    readonly commentId?: string;

    /**
     * The ID of the checklist to update
     */
    readonly checklistId?: string;

    /**
     * The ID of the checklist item to delete
     */
    readonly checkItemId?: string;

    /**
     * The ID of the board
     * Default: {"mode":"list","value":""}
     */
    readonly boardId?: any;

    /**
     * The color for the label
     * Default: "null"
     */
    readonly color?: "black" | "blue" | "green" | "lime" | "null" | "orange" | "pink" | "purple" | "red" | "sky" | "yellow";

    /**
     * Whether the list should be archived or unarchived
     */
    readonly archive?: boolean;

    /**
     * The ID of the board the list should be created in
     */
    readonly idBoard?: string;


}

