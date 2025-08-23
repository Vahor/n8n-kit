// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Clearbit/Clearbit.node.ts' node

export const description = "Consume Clearbit API" as const;
export const type = "n8n-nodes-base.clearbit" as const;
export const version = 1 as const;
export const credentials = [{"name":"clearbitApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ClearbitNodeParameters {
    /**
     * Default: "company"
     */
    readonly resource?: "company" | "person";

    /**
     * Default: "enrich"
     */
    readonly operation?: "autocomplete" | "enrich" | "enrich";

    /**
     * The domain to look up
     */
    readonly domain?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "companyName"?: string, "facebook"?: string, "linkedin"?: string, "twitter"?: string } | { "company"?: string, "companyDomain"?: string, "facebook"?: string, "familyName"?: string, "givenName"?: string, "ipAddress"?: string, "location"?: string, "linkedIn"?: string, "twitter"?: string };

    /**
     * Name is the partial name of the company
     */
    readonly name?: string;

    /**
     * The email address to look up
     */
    readonly email?: string;

}
