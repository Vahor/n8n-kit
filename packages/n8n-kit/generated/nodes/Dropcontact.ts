// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Dropcontact/Dropcontact.node.js' node

export const name = "dropcontact" as const;
export const description = "Find B2B emails and enrich contacts" as const;
export const version = 1 as const;
export const defaults = {"name":"Dropcontact"} as const;
export const credentials = [{"name":"dropcontactApi","required":true}] as const

/**
 * Find B2B emails and enrich contacts
 */
export interface DropcontactNodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource: "contact";

    /**
     * Default: "enrich"
     */
    readonly operation: "enrich" | "fetchRequest";

    /**
     */
    readonly requestId?: string;

    /**
     */
    readonly email?: string;

    /**
     * When off, waits for the contact data before completing. Waiting time can be adjusted with Extend Wait Time option. When on, returns a request_id that can be used later in the Fetch Request operation.
     */
    readonly simplify?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "num_siren"?: string, "siret"?: string, "company"?: string, "country"?: string, "first_name"?: string, "full_name"?: string, "last_name"?: string, "linkedin"?: string, "phone"?: string, "website"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "waitTime"?: number, "siren"?: boolean, "language"?: "en" | "fr" };


}

