// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Freshservice/Freshservice.node.ts' node

export const name = "freshservice" as const;
export const description = "Consume the Freshservice API" as const;
export const version = 1 as const;

/**
 * Consume the Freshservice API
 */
export interface FreshserviceNodeParameters {

    /**
     * Default: "agent"
     */
    readonly resource?: "agent" | "agentGroup" | "agentRole" | "announcement" | "assetType" | "change" | "department" | "location" | "problem" | "product" | "release" | "requester" | "requesterGroup" | "software" | "ticket";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     */
    readonly email?: string | string;

    /**
     */
    readonly firstName?: string | string;

    /**
     * Role to assign to the agent
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly roles?: { "roleProperties": any };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "address"?: string, "background_information"?: string, "department_ids"?: string[], "job_title"?: string, "language"?: "en" | "ar" | "ca" | "cs" | "cy-GB" | "da" | "de" | "es" | "es-LA" | "et" | "fi" | "fr" | "he" | "hu" | "id" | "it" | "ja-JP" | "ko" | "LV" | "nb-NO" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ru-RU" | "sk" | "sk-SK" | "sl" | "sv-SE" | "th" | "tr" | "UK" | "vi" | "zh-CN" | "zh-TW", "last_name"?: string, "location_id"?: string, "member_of"?: string[], "mobile_phone_number"?: string, "observer_of"?: string[], "scoreboard_level_id"?: "1" | "2" | "3" | "4" | "5" | "6", "time_format"?: "12h" | "24h", "work_phone_number"?: string } | { "description"?: string, "escalate_to"?: string, "members"?: string[], "observers"?: string[], "unassigned_for"?: "1d" | "1h" | "12h" | "2d" | "2h" | "3d" | "30m" | "8h" } | { "additional_emails"?: string, "departments"?: string[], "visible_from"?: string, "visible_till"?: string } | { "description"?: string, "parent_asset_type_id"?: string } | { "agent_id"?: string, "change_type"?: "1" | "2" | "3" | "4", "department_id"?: string, "description"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "priority"?: "1" | "2" | "3" | "4", "risk"?: "1" | "2" | "3" | "4", "status"?: "1" | "2" | "3" | "4" | "5" | "6", "subject"?: string } | { "description"?: string, "domains"?: string } | { "address"?: { "addressFields": any } } | { "agent_id"?: string, "department_id"?: string, "description"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "priority"?: "1" | "2" | "3" | "4", "status"?: "1" | "2" | "3" } | { "description"?: string, "manufacturer"?: string, "mode_of_procurement"?: "Buy" | "Lease" | "Both", "status"?: "In Production" | "In Pipeline" | "Retired" } | { "department_id"?: string, "description"?: string, "group_id"?: string } | { "address"?: string, "background_information"?: string, "department_ids"?: string[], "job_title"?: string, "language"?: "en" | "ar" | "ca" | "cs" | "cy-GB" | "da" | "de" | "es" | "es-LA" | "et" | "fi" | "fr" | "he" | "hu" | "id" | "it" | "ja-JP" | "ko" | "LV" | "nb-NO" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ru-RU" | "sk" | "sk-SK" | "sl" | "sv-SE" | "th" | "tr" | "UK" | "vi" | "zh-CN" | "zh-TW", "last_name"?: string, "location_id"?: string, "mobile_phone_number"?: string, "secondary_emails"?: string, "time_format"?: "12h" | "24h", "work_phone_number"?: string } | { "description"?: string } | { "description"?: string, "notes"?: string, "status"?: "disabled" | "ignored" | "needs review" | "restricted" } | { "cc_emails"?: string, "department_id"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "name"?: string, "requester_id"?: string };

    /**
     * ID of the agent to delete
     */
    readonly agentId?: string | string | string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number | number | number | number | number | number | number | number | number | number | number | number | number | number | number;

    /**
     * Default: {}
     */
    readonly filters?: { "department_id"?: string, "email"?: string, "first_name"?: string, "job_title"?: string, "language"?: "en" | "ar" | "ca" | "cs" | "cy-GB" | "da" | "de" | "es" | "es-LA" | "et" | "fi" | "fr" | "he" | "hu" | "id" | "it" | "ja-JP" | "ko" | "LV" | "nb-NO" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ru-RU" | "sk" | "sk-SK" | "sl" | "sv-SE" | "th" | "tr" | "UK" | "vi" | "zh-CN" | "zh-TW", "last_name"?: string, "location_id"?: string, "mobile_phone_number"?: string, "work_phone_number"?: string } | { "filter"?: "closed" | "my_open" | "release_requested" | "requester_id" | "unassigned", "sort_by"?: "asc" | "desc", "updated_since"?: string } | { "name"?: string } | { "department_id"?: string, "first_name"?: string, "job_title"?: string, "language"?: "en" | "ar" | "ca" | "cs" | "cy-GB" | "da" | "de" | "es" | "es-LA" | "et" | "fi" | "fr" | "he" | "hu" | "id" | "it" | "ja-JP" | "ko" | "LV" | "nb-NO" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ru-RU" | "sk" | "sk-SK" | "sl" | "sv-SE" | "th" | "tr" | "UK" | "vi" | "zh-CN" | "zh-TW", "last_name"?: string, "location_id"?: string, "mobile_phone_number"?: string, "primary_email"?: string, "work_phone_number"?: string } | { "agent_id"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "priority"?: "1" | "2" | "3" | "4", "status"?: "2" | "3" | "4" | "5", "created_at"?: string, "due_by"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "address"?: string, "background_information"?: string, "department_ids"?: string[], "email"?: string, "first_name"?: string, "job_title"?: string, "language"?: "en" | "ar" | "ca" | "cs" | "cy-GB" | "da" | "de" | "es" | "es-LA" | "et" | "fi" | "fr" | "he" | "hu" | "id" | "it" | "ja-JP" | "ko" | "LV" | "nb-NO" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ru-RU" | "sk" | "sk-SK" | "sl" | "sv-SE" | "th" | "tr" | "UK" | "vi" | "zh-CN" | "zh-TW", "last_name"?: string, "location_id"?: string, "member_of"?: string[], "mobile_phone_number"?: string, "observer_of"?: string[], "scoreboard_level_id"?: "1" | "2" | "3" | "4" | "5" | "6", "time_format"?: "12h" | "24h", "work_phone_number"?: string } | { "description"?: string, "escalate_to"?: string, "members"?: string[], "name"?: string, "observers"?: string[], "unassigned_for"?: "1d" | "1h" | "12h" | "2d" | "2h" | "3d" | "30m" | "8h" } | { "additional_emails"?: string, "body_html"?: string, "departments"?: string[], "title"?: string, "visibility"?: "agents_only" | "grouped_visibility" | "everyone" } | { "description"?: string, "name"?: string } | { "agent_id"?: string, "change_type"?: "1" | "2" | "3" | "4", "department_id"?: string, "description"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "priority"?: "1" | "2" | "3" | "4", "requester_id"?: string, "risk"?: "1" | "2" | "3" | "4", "status"?: "1" | "2" | "3" | "4" | "5" | "6", "subject"?: string } | { "description"?: string, "domains"?: string, "name"?: string } | { "name"?: string, "address"?: { "addressFields": any } } | { "agent_id"?: string, "department_id"?: string, "description"?: string, "due_by"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "priority"?: "1" | "2" | "3" | "4", "requester_id"?: string, "status"?: "1" | "2" | "3", "subject"?: string } | { "asset_type_id"?: string, "description"?: string, "manufacturer"?: string, "mode_of_procurement"?: "Buy" | "Lease" | "Both", "name"?: string, "status"?: "In Production" | "In Pipeline" | "Retired" } | { "department_id"?: string, "description"?: string, "group_id"?: string, "priority"?: "1" | "2" | "3" | "4", "release_type"?: "1" | "2" | "3" | "4", "status"?: "1" | "2" | "3" | "4" | "5", "subject"?: string } | { "address"?: string, "background_information"?: string, "department_ids"?: string[], "first_name"?: string, "job_title"?: string, "language"?: "en" | "ar" | "ca" | "cs" | "cy-GB" | "da" | "de" | "es" | "es-LA" | "et" | "fi" | "fr" | "he" | "hu" | "id" | "it" | "ja-JP" | "ko" | "LV" | "nb-NO" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ru-RU" | "sk" | "sk-SK" | "sl" | "sv-SE" | "th" | "tr" | "UK" | "vi" | "zh-CN" | "zh-TW", "last_name"?: string, "location_id"?: string, "mobile_phone_number"?: string, "primary_email"?: string, "secondary_emails"?: string, "time_format"?: "12h" | "24h", "work_phone_number"?: string } | { "description"?: string, "name"?: string } | { "application_type"?: "desktop" | "mobile" | "saas", "description"?: string, "name"?: string, "notes"?: string, "status"?: "disabled" | "ignored" | "needs review" | "restricted" } | { "department_id"?: string, "description"?: string, "email"?: string, "group_id"?: string, "impact"?: "1" | "2" | "3", "name"?: string, "phone"?: string, "priority"?: "1" | "2" | "3" | "4", "status"?: "2" | "3" | "4" | "5", "subject"?: string };

    /**
     */
    readonly name?: string | string | string | string | string | string | string;

    /**
     * ID of the agent group to delete
     */
    readonly agentGroupId?: string | string | string;

    /**
     * ID of the agent role to retrieve
     */
    readonly agentRoleId?: string;

    /**
     */
    readonly title?: string;

    /**
     * HTML supported
     */
    readonly bodyHtml?: string;

    /**
     * Default: "everyone"
     */
    readonly visibility?: "agents_only" | "grouped_visibility" | "everyone";

    /**
     * Timestamp at which announcement becomes active
     */
    readonly visibleFrom?: string;

    /**
     * ID of the announcement to delete
     */
    readonly announcementId?: string | string | string;

    /**
     * ID of the asset type to delete
     */
    readonly assetTypeId?: string | string | string | string;

    /**
     * ID of the requester of the change. Choose from the list or specify an ID. You can also specify the ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getRequesters"}
     */
    readonly requesterId?: string | string | string | string | string;

    /**
     */
    readonly subject?: string | string | string | string;

    /**
     */
    readonly plannedStartDate?: string | string;

    /**
     */
    readonly plannedEndDate?: string | string;

    /**
     * ID of the change to delete
     */
    readonly changeId?: string | string | string;

    /**
     * ID of the department to delete
     */
    readonly departmentId?: string | string | string;

    /**
     * ID of the location to delete
     */
    readonly locationId?: string | string | string;

    /**
     * Date when the problem is due to be solved
     */
    readonly dueBy?: string;

    /**
     * ID of the problem to delete
     */
    readonly problemId?: string | string | string;

    /**
     * ID of the product to delete
     */
    readonly productId?: string | string | string;

    /**
     * Default: 1
     */
    readonly releaseType?: "1" | "2" | "3" | "4";

    /**
     * Default: 1
     */
    readonly priority?: "1" | "2" | "3" | "4" | "1" | "2" | "3" | "4";

    /**
     * Default: 1
     */
    readonly status?: "1" | "2" | "3" | "4" | "5" | "2" | "3" | "4" | "5";

    /**
     * ID of the release to delete
     */
    readonly releaseId?: string | string | string;

    /**
     */
    readonly primaryEmail?: string;

    /**
     * ID of the requester group to delete
     */
    readonly requesterGroupId?: string | string | string;

    /**
     * Default: "desktop"
     */
    readonly applicationType?: "desktop" | "mobile" | "saas";

    /**
     * ID of the software application to delete
     */
    readonly softwareId?: string | string | string;

    /**
     * HTML supported
     */
    readonly description?: string;

    /**
     * ID of the ticket to delete
     */
    readonly ticketId?: string | string | string;


}

