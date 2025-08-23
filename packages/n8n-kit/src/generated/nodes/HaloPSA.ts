// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HaloPSA/HaloPSA.node.ts' node

export const name = "haloPSA" as const;
export const description = "Consume HaloPSA API" as const;
export const version = 1 as const;
export const credentials = [{"name":"haloPSAApi","required":true,"testedBy":"haloPSAApiCredentialTest"}] as const;

/**
 * Consume HaloPSA API
 */
export interface HaloPSANodeParameters {

    /**
     * Default: "client"
     */
    readonly resource: "client" | "site" | "ticket" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Enter client name
     */
    readonly clientName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "inactive"?: "false" | "true", "notes"?: string, "is_vip"?: boolean, "website"?: string } | { "agent_id"?: string, "startdate"?: string, "targetdate"?: string } | { "maincontact_name"?: string, "notes"?: string, "phonenumber"?: string } | { "emailaddress"?: string, "notes"?: string, "password"?: string, "surname"?: string, "inactive"?: boolean };

    /**
     */
    readonly clientId?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "activeStatus"?: "active" | "all" | "inactive", "search"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "inactive"?: "false" | "true", "name"?: string, "notes"?: string, "is_vip"?: boolean, "website"?: string } | { "agent_id"?: string, "details"?: string, "startdate"?: string, "summary"?: string, "targetdate"?: string } | { "client_id"?: string, "maincontact_name"?: string, "name"?: string, "notes"?: string, "phonenumber"?: string } | { "emailaddress"?: string, "name"?: string, "notes"?: string, "password"?: string, "site_id"?: string, "surname"?: string, "inactive"?: boolean };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getHaloPSATicketsTypes"}
     */
    readonly ticketType?: string;

    /**
     */
    readonly summary?: string;

    /**
     */
    readonly details?: string;

    /**
     */
    readonly ticketId?: string;

    /**
     * Enter site name
     */
    readonly siteName?: string;

    /**
     * Whether client can be selected by ID
     */
    readonly selectOption?: boolean;

    /**
     */
    readonly siteId?: string;

    /**
     * Enter user name
     */
    readonly userName?: string;

    /**
     */
    readonly userId?: string;


}

