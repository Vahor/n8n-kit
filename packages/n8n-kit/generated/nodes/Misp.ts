// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Misp/Misp.node.js' node

export const name = "misp" as const;
export const description = "Consume the MISP API" as const;
export const version = 1 as const;
export const defaults = {"name":"MISP"} as const;
export const credentials = [{"name":"mispApi","required":true}] as const

/**
 * Consume the MISP API
 */
export interface MispNodeParameters {

    /**
     * Default: "attribute"
     */
    readonly resource?: "attribute" | "event" | "eventTag" | "feed" | "galaxy" | "noticelist" | "organisation" | "tag" | "user" | "warninglist";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "publish" | "unpublish" | "add" | "remove" | "disable" | "enable";

    /**
     * UUID of the event to attach the attribute to
     */
    readonly eventId?: string;

    /**
     * Default: "text"
     */
    readonly type?: "text" | "url" | "comment";

    /**
     */
    readonly value?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "sharing_group_id"?: string, "analysis"?: "0" | "1" | "2", "threat_level_id"?: "1" | "2" | "3" | "4", "json"?: string, "created_by_email"?: string, "description"?: string, "nationality"?: string, "sector"?: string, "type"?: string, "usercount"?: number, "colour"?: any, "gpgkey"?: string, "invited_by"?: string, "org_id"?: string };

    /**
     * UUID or numeric ID of the attribute
     */
    readonly attributeId?: string;

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
    readonly updateFields?: { "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "sharing_group_id"?: string, "analysis"?: "0" | "1" | "2", "information"?: string, "threat_level_id"?: "1" | "2" | "3" | "4", "name"?: string, "provider"?: string, "rules"?: string, "url"?: string, "description"?: string, "nationality"?: string, "sector"?: string, "type"?: string, "colour"?: any, "email"?: string, "gpgkey"?: string, "invited_by"?: string, "org_id"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getOrgs"}
     */
    readonly org_id?: string;

    /**
     * Information on the event - max 65535 characters
     */
    readonly information?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTags"}
     */
    readonly tagId?: string;

    /**
     */
    readonly name?: string;

    /**
     */
    readonly provider?: string;

    /**
     */
    readonly url?: string;

    /**
     * UUID or numeric ID of the feed
     */
    readonly feedId?: string;

    /**
     * UUID or numeric ID of the galaxy
     */
    readonly galaxyId?: string;

    /**
     * Numeric ID of the noticelist
     */
    readonly noticelistId?: string;

    /**
     * UUID or numeric ID of the organisation
     */
    readonly organisationId?: string;

    /**
     */
    readonly email?: string;

    /**
     * Role IDs are available in the MISP dashboard at /roles/index
     */
    readonly role_id?: string;

    /**
     * Numeric ID of the user
     */
    readonly userId?: string;

    /**
     * Numeric ID of the warninglist
     */
    readonly warninglistId?: string;


}

