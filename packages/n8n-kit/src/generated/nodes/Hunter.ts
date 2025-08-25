// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Hunter/Hunter.node.ts' node

export const description = "Consume Hunter API" as const;
export const type = "n8n-nodes-base.hunter" as const;
export const version = 1 as const;
export const credentials = [{"name":"hunterApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface HunterNodeParameters {
    /**
     * Operation to consume
     * Default: "domainSearch"
     */
    readonly operation?: "domainSearch" | "emailFinder" | "emailVerifier";

    /** Domain name from which you want to find the email addresses. For example, "stripe.com". */
    readonly domain?: string;

    /**
     * Whether to return only the found emails
     * Default: true
     */
    readonly onlyEmails?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { type?: "personal" | "generic", seniority?: ("junior" | "senior" | "executive")[], department?: ("communication" | "executive" | "finance" | "hr" | "it" | "legal" | "management" | "marketing" | "sales" | "support")[] };

    /** The person's first name. It doesn't need to be in lowercase. */
    readonly firstname?: string;

    /** The person's last name. It doesn't need to be in lowercase. */
    readonly lastname?: string;

    /** The email address you want to verify */
    readonly email?: string;

}
