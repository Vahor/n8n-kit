// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Twist/Twist.node.ts' node

export const name = "twist" as const;
export const description = "Consume Twist API" as const;
export const version = 1 as const;
export const credentials = [{"name":"twistOAuth2Api","required":true}] as const;

/**
 * Consume Twist API
 */
export interface TwistNodeParameters {

    /**
     * Default: "messageConversation"
     */
    readonly resource?: "channel" | "comment" | "messageConversation" | "thread";

    /**
     * Default: "create"
     */
    readonly operation?: "archive" | "create" | "delete" | "get" | "getAll" | "unarchive" | "update" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The ID of the workspace. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getWorkspaces"}
     */
    readonly workspaceId?: string;

    /**
     * The name of the channel
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "color"?: "6" | "1" | "4" | "0" | "7" | "9" | "5" | "11" | "8" | "3" | "2" | "10", "description"?: string, "public"?: boolean, "temp_id"?: number, "user_ids"?: any[] } | { "actionsUi"?: { "actionValues": any }, "binaryProperties"?: string, "direct_mentions"?: any[], "mark_thread_position"?: boolean, "recipients"?: any[], "temp_id"?: number, "send_as_integration"?: boolean } | { "actionsUi"?: { "actionValues": any }, "binaryProperties"?: string, "direct_mentions"?: any[] } | { "to_obj_index"?: number, "limit"?: number, "order_by"?: "ASC" | "DESC", "from_obj_index"?: number } | { "actionsUi"?: { "actionValues": any }, "binaryProperties"?: string, "direct_mentions"?: any[], "recipients"?: any[], "send_as_integration"?: boolean, "temp_id"?: number };

    /**
     * The ID of the channel
     */
    readonly channelId?: string;

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
     * Default: {}
     */
    readonly filters?: { "archived"?: boolean } | { "as_ids"?: boolean, "to_obj_index"?: number, "newer_than_ts"?: string, "older_than_ts"?: string, "order_by"?: "ASC" | "DESC", "from_obj_index"?: number } | { "as_ids"?: boolean, "filter_by"?: "attached_to_me" | "everyone" | "is_starred", "newer_than_ts"?: string, "older_than_ts"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "color"?: "6" | "1" | "4" | "0" | "7" | "9" | "5" | "11" | "8" | "3" | "2" | "10", "description"?: string, "name"?: string, "public"?: boolean } | { "actionsUi"?: { "actionValues": any }, "binaryProperties"?: string, "content"?: string, "direct_mentions"?: any[] } | { "actionsUi"?: { "actionValues": any }, "binaryProperties"?: string, "content"?: string, "direct_mentions"?: any[], "title"?: string };

    /**
     * The ID of the thread
     */
    readonly threadId?: string;

    /**
     * The content of the comment
     */
    readonly content?: string;

    /**
     * The ID of the comment
     */
    readonly commentId?: string;

    /**
     * The ID of the conversation. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getConversations","loadOptionsDependsOn":["workspaceId"]}
     */
    readonly conversationId?: string;

    /**
     * The ID of the conversation message
     */
    readonly id?: string;

    /**
     * The title of the new thread (1 < length < 300)
     */
    readonly title?: string;


}

