// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Automizy/Automizy.node.ts' node

export const name = "automizy" as const;
export const description = "Consume Automizy API" as const;
export const version = 1 as const;
export const defaults = {"name":"Automizy"} as const;
export const credentials = [{"name":"automizyApi","required":true}] as const

/**
 * Consume Automizy API
 */
export interface AutomizyNodeParameters {

    /**
     */
    readonly deprecated?: string;

    /**
     * Default: "contact"
     */
    readonly resource?: "contact" | "list";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The email address of the contact
     */
    readonly email?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly listId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "customFieldsUi"?: { "customFieldsValues": any }, "status"?: "ACTIVE" | "BANNED" | "BOUNCED" | "INACTIVE" | "UNSUBSCRIBED", "tags"?: string[], "direction"?: "asc" | "desc", "fields"?: string, "sortBy"?: string };

    /**
     * Can be ID or email
     */
    readonly contactId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "addTags"?: string[], "customFieldsUi"?: { "customFieldsValues": any }, "removeTags"?: string[], "status"?: "ACTIVE" | "BANNED" | "BOUNCED" | "INACTIVE" | "UNSUBSCRIBED", "tags"?: string[] };

    /**
     */
    readonly name?: string;


}

