// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Clearbit/Clearbit.node.js' node

export const name = "clearbit" as const;
export const description = "Consume Clearbit API" as const;
export const version = 1 as const;
export const defaults = {"name":"Clearbit"} as const;
export const credentials = [{"name":"clearbitApi","required":true}] as const

/**
 * Consume Clearbit API
 */
export interface ClearbitNodeParameters {

    /**
     * Default: "company"
     */
    readonly resource?: "company" | "person";

    /**
     * Default: "enrich"
     */
    readonly operation?: "autocomplete" | "enrich";

    /**
     * The domain to look up
     */
    readonly domain?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "companyName"?: string, "facebook"?: string, "linkedin"?: string, "twitter"?: string, "company"?: string, "companyDomain"?: string, "familyName"?: string, "givenName"?: string, "ipAddress"?: string, "location"?: string, "linkedIn"?: string };

    /**
     * Name is the partial name of the company
     */
    readonly name?: string;

    /**
     * The email address to look up
     */
    readonly email?: string;


}

