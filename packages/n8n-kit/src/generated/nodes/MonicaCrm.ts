// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MonicaCrm/MonicaCrm.node.ts' node

export const description = "Consume the Monica CRM API" as const;
export const type = "n8n-nodes-base.monicaCrm" as const;
export const version = 1 as const;
export const credentials = [{"name":"monicaCrmApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MonicaCrmNodeParameters {
    /**
     * Default: "contact"
     */
    readonly resource?: "activity" | "call" | "contact" | "contactField" | "contactTag" | "conversation" | "conversationMessage" | "journalEntry" | "note" | "reminder" | "tag" | "task";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "update" | "add" | "remove" | "add" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getActivityTypes"}
     */
    readonly activityTypeId?: string;

    /**
     * Comma-separated list of IDs of the contacts to associate the activity with
     */
    readonly contacts?: string;

    /**
     * Date when the activity happened
     */
    readonly happenedAt?: string;

    /**
     * Brief description of the activity - max 255 characters
     */
    readonly summary?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string } | { "birthdate"?: string, "deceasedDate"?: string, "isDeceased"?: boolean, "last_name"?: string, "nickname"?: string, "is_partial"?: "false" | "true" } | { "isFavorited"?: boolean };

    /**
     * ID of the activity to delete
     */
    readonly activityId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "activity_type_id"?: string, "contacts"?: string, "description"?: string, "happened_at"?: string, "summary"?: string } | { "calledAt"?: string, "contactId"?: string, "content"?: string } | { "birthdate"?: string, "deceased_date"?: string, "first_name"?: string, "gender_id"?: string, "is_deceased"?: boolean, "last_name"?: string, "nickname"?: string, "is_partial"?: "false" | "true" } | { "contact_id"?: string, "content"?: string, "written_at"?: string, "written_by_me"?: "true" | "false" } | { "post"?: string, "title"?: string } | { "body"?: string, "contact_id"?: string, "is_favorited"?: boolean } | { "contact_id"?: string, "description"?: string, "frequency_type"?: "one_time" | "week" | "month" | "year", "initial_data"?: string, "frequency_number"?: number, "title"?: string } | { "contactId"?: string, "completed"?: boolean, "description"?: string, "title"?: string };

    /**
     * ID of the contact to associate the call with
     */
    readonly contactId?: string;

    /**
     * Date when the call happened
     */
    readonly calledAt?: string;

    /**
     * Description of the call - max 100,000 characters
     */
    readonly content?: string;

    /**
     * ID of the call to delete
     */
    readonly callId?: string;

    readonly firstName?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getGenders"}
     */
    readonly genderId?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "query"?: string, "sort"?: "created_at" | "-created_at" | "updated_at" | "-updated_at" };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getContactFieldTypes"}
     */
    readonly contactFieldTypeId?: string;

    /**
     * Content of the contact field - max 255 characters
     */
    readonly data?: string;

    /**
     * ID of the contactField to delete
     */
    readonly contactFieldId?: string;

    /**
     * Tags to add to the contact. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTagsToAdd"}
     */
    readonly tagsToAdd?: any[];

    /**
     * Tags to remove from the contact. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTagsToRemove"}
     */
    readonly tagsToRemove?: any[];

    /**
     * ID of the conversation to delete
     */
    readonly conversationId?: string;

    /**
     * Date when the message was written
     */
    readonly writtenAt?: string;

    /**
     * Author of the message
     * Default: true
     */
    readonly writtenByMe?: "true" | "false";

    /**
     * ID of the message to update
     */
    readonly messageId?: string;

    /**
     * Title of the journal entry - max 250 characters
     */
    readonly title?: string;

    /**
     * Content of the journal entry - max 100,000 characters
     */
    readonly post?: string;

    /**
     * ID of the journal entry to delete
     */
    readonly journalId?: string;

    /**
     * Body of the note - max 100,000 characters
     */
    readonly body?: string;

    /**
     * ID of the note to delete
     */
    readonly noteId?: string;

    /**
     * Type of frequency of the reminder
     * Default: "one_time"
     */
    readonly frequencyType?: "one_time" | "week" | "month" | "year";

    /**
     * Interval for the reminder
     */
    readonly frequencyNumber?: number;

    /**
     * Date of the reminder
     */
    readonly initialDate?: string;

    /**
     * ID of the reminder to delete
     */
    readonly reminderId?: string;

    /**
     * Name of the tag - max 250 characters
     */
    readonly name?: string;

    /**
     * ID of the tag to delete
     */
    readonly tagId?: string;

    /**
     * ID of the task to delete
     */
    readonly taskId?: string;

}
