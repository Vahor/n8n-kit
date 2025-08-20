// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Affinity/Affinity.node.js' node

export const name = "affinity" as const;
export const description = "Consume Affinity API" as const;
export const version = 1 as const;
export const defaults = {"name":"Affinity"} as const;
export const credentials = [{"name":"affinityApi","required":true}] as const

/**
 * Consume Affinity API
 */
export interface AffinityNodeParameters {

    /**
     * Default: "organization"
     */
    readonly resource?: "list" | "listEntry" | "organization" | "person";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "create" | "delete" | "update";

    /**
     * The unique ID of the list object to be retrieved
     */
    readonly listId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;

    /**
     * The unique ID of the entity (person, organization, or opportunity) to add to this list
     */
    readonly entityId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "creator_id"?: string, "persons"?: string[], "organizations"?: string[] };

    /**
     * The unique ID of the list entry object to be retrieved
     */
    readonly listEntryId?: string;

    /**
     * The name of the organization
     */
    readonly name?: string;

    /**
     * The domain name of the organization
     */
    readonly domain?: string;

    /**
     * Unique identifier for the organization
     */
    readonly organizationId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "domain"?: string, "name"?: string, "persons"?: string[], "firstName"?: string, "lastName"?: string, "organizations"?: string[] };

    /**
     * Default: {}
     */
    readonly options?: { "withInteractionDates"?: boolean, "term"?: string };

    /**
     * The first name of the person
     */
    readonly firstName?: string;

    /**
     * The last name of the person
     */
    readonly lastName?: string;

    /**
     * The email addresses of the person
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add To Email"}
     */
    readonly emails?: string;

    /**
     * Unique identifier for the person
     */
    readonly personId?: string;


}

