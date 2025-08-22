// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ActionNetwork/ActionNetwork.node.ts' node

export const name = "actionNetwork" as const;
export const description = "Consume the Action Network API" as const;
export const version = 1 as const;

/**
 * Consume the Action Network API
 */
export interface ActionNetworkNodeParameters {

    /**
     * Default: "attendance"
     */
    readonly resource?: "attendance" | "event" | "person" | "personTag" | "petition" | "signature" | "tag";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getAll" | "create" | "get" | "getAll" | "create" | "get" | "getAll" | "update" | "create" | "get" | "getAll" | "update" | "create" | "get" | "getAll" | "update" | "create" | "get" | "getAll" | "add" | "remove";

    /**
     * ID of the person to create an attendance for
     */
    readonly personId?: string | string | string | string | string;

    /**
     * ID of the event to create an attendance for
     */
    readonly eventId?: string | string | string | string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean;

    /**
     * ID of the attendance to retrieve
     */
    readonly attendanceId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number | number | number | number | number | number;

    /**
     * Source where the event originated
     */
    readonly originSystem?: string | string;

    /**
     * Title of the event to create
     */
    readonly title?: string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "browser_url"?: string, "description"?: string, "end_date"?: string, "featured_image_url"?: string, "instructions"?: string, "location"?: { "postal_addresses_fields": any }, "name"?: string, "start_date"?: string } | { "family_name"?: string, "given_name"?: string, "languages_spoken"?: "da" | "nl" | "en" | "fi" | "fr" | "de" | "hu" | "id" | "ja" | "pt" | "br" | "ru" | "es" | "sv" | "tr" | "cy", "phone_numbers"?: { "phone_numbers_fields": any }, "postal_addresses"?: { "postal_addresses_fields": any } } | { "browser_url"?: string, "featured_image_url"?: string, "name"?: string, "petition_text"?: string, "target"?: string } | { "comments"?: string };

    /**
     * Person’s email addresses
     * Default: {}
     */
    readonly email_addresses?: { "email_addresses_fields": any };

    /**
     * Default: {}
     */
    readonly updateFields?: { "family_name"?: string, "given_name"?: string, "languages_spoken"?: "da" | "nl" | "en" | "fi" | "fr" | "de" | "hu" | "id" | "ja" | "pt" | "br" | "ru" | "es" | "sv" | "tr" | "cy", "phone_numbers"?: { "phone_numbers_fields": any }, "postal_addresses"?: { "postal_addresses_fields": any } } | { "browser_url"?: string, "featured_image_url"?: string, "name"?: string, "petition_text"?: string, "target"?: string } | { "comments"?: string };

    /**
     * ID of the petition to retrieve
     */
    readonly petitionId?: string | string | string | string | string | string;

    /**
     * ID of the signature to retrieve
     */
    readonly signatureId?: string | string;

    /**
     * Name of the tag to create
     */
    readonly name?: string;

    /**
     * ID of the tag to retrieve
     */
    readonly tagId?: string | string | string;

    /**
     * ID of the tagging to remove. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsDependsOn":["tagId"],"loadOptionsMethod":"getTaggings"}
     */
    readonly taggingId?: string;


}

