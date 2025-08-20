// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Demio/Demio.node.js' node

export const name = "demio" as const;
export const description = "Consume the Demio API" as const;
export const version = 1 as const;
export const defaults = {"name":"Demio"} as const;
export const credentials = [{"name":"demioApi","required":true}] as const

/**
 * Consume the Demio API
 */
export interface DemioNodeParameters {

    /**
     * Default: "event"
     */
    readonly resource?: "event" | "report";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "register";

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
    readonly filters?: { "type"?: "automated" | "past" | "upcoming", "status"?: "attended" | "banned" | "completed" | "did-not-attend" | "left-early" };

    /**
     */
    readonly eventId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "active"?: boolean, "date_id"?: string, "company"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "ref_url"?: string, "gdpr"?: string, "last_name"?: string, "phone_number"?: string, "website"?: string };

    /**
     * The registrant's first name
     */
    readonly firstName?: string;

    /**
     * The registrant's email address
     */
    readonly email?: string;

    /**
     * ID of the session. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getEventSessions","loadOptionsDependsOn":["eventId"]}
     */
    readonly dateId?: string;


}

