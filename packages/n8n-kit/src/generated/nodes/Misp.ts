// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Misp/Misp.node.ts' node

export const description = "Consume the MISP API" as const;
export const type = "n8n-nodes-base.misp" as const;
export const version = 1 as const;
export const credentials = [{"name":"mispApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MispNodeParameters {
    /**
     * Default: "attribute"
     */
    readonly resource?: "attribute" | "event" | "eventTag" | "feed" | "galaxy" | "noticelist" | "object" | "organisation" | "tag" | "user" | "warninglist";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "search" | "update" | "create" | "delete" | "get" | "getAll" | "publish" | "search" | "unpublish" | "update" | "add" | "remove" | "create" | "disable" | "enable" | "get" | "getAll" | "update" | "delete" | "get" | "getAll" | "get" | "getAll" | "search" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "getAll" | "update";

    /**
     * UUID of the event to attach the attribute to
     */
    readonly eventId?: string;

    /**
     * Default: "text"
     */
    readonly type?: "text" | "url" | "comment";

    readonly value?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "sharing_group_id"?: string } | { "category"?: string, "deleted"?: boolean, "searchall"?: string, "tags"?: string, "type"?: string, "published"?: boolean } | { "analysis"?: "0" | "1" | "2", "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "sharing_group_id"?: string, "threat_level_id"?: "1" | "2" | "3" | "4" } | { "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "json"?: string } | { "created_by_email"?: string, "description"?: string, "nationality"?: string, "sector"?: string, "type"?: string, "usercount"?: number } | { "colour"?: string } | { "gpgkey"?: string, "invited_by"?: string, "org_id"?: string };

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
     * Whether to use JSON to specify the fields for the search request
     */
    readonly useJson?: boolean;

    /**
     * Get more info at {YOUR_BASE_URL_SPECIFIED_IN_CREDENTIALS}/api/openapi#operation/restSearchAttributes
     * Default: "{\n  \"value\": \"search value\",\n  \"type\": \"text\"\n}\n"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "sharing_group_id"?: string } | { "analysis"?: "0" | "1" | "2", "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "information"?: string, "sharing_group_id"?: string, "threat_level_id"?: "1" | "2" | "3" | "4" } | { "distribution"?: "3" | "2" | "5" | "4" | "1" | "0", "name"?: string, "provider"?: string, "rules"?: string, "url"?: string } | { "description"?: string, "name"?: string, "nationality"?: string, "sector"?: string, "type"?: string } | { "colour"?: string, "name"?: string } | { "email"?: string, "gpgkey"?: string, "invited_by"?: string, "org_id"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getOrgs"}
     */
    readonly org_id?: string;

    /**
     * Information on the event - max 65535 characters
     */
    readonly information?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTags"}
     */
    readonly tagId?: string;

    readonly name?: string;

    readonly provider?: string;

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
