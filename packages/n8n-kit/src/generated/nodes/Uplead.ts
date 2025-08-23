// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Uplead/Uplead.node.ts' node

export const description = "Consume Uplead API" as const;
export const type = "n8n-nodes-base.uplead" as const;
export const version = 1 as const;
export const credentials = [{"name":"upleadApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface UpleadNodeParameters {
    /**
     * Default: "company"
     */
    readonly resource?: "company" | "person";

    /**
     * Default: "enrich"
     */
    readonly operation?: "enrich";

    /**
     * The name of the company (e.g – amazon)
     */
    readonly company?: string;

    /**
     * The domain name (e.g – amazon.com)
     */
    readonly domain?: string;

    /**
     * Email address (e.g – mbenioff@salesforce.com)
     */
    readonly email?: string;

    /**
     * First name of the person (e.g – Marc)
     */
    readonly firstname?: string;

    /**
     * Last name of the person (e.g – Benioff)
     */
    readonly lastname?: string;

}
