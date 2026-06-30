// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/LoneScale/LoneScale.node.ts' node

export const description = "Enrich and source contacts, search companies, and manage lists" as const;
export const type = "n8n-nodes-base.loneScale" as const;
export const version = 1 as const;
export const credentials = [{"name":"loneScaleApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface LoneScaleNodeParameters {
    /**
     * Create a new list
     * Default: "list"
     */
    readonly resource?: "company" | "contact" | "item" | "list";

    /** Default: "create" */
    readonly operation?: "create" | "add" | "enrich" | "source" | "search";

    /** Name of your list */
    readonly name?: string;

    /**
     * Type of your list
     * Default: "COMPANY"
     */
    readonly type?: "COMPANY" | "PEOPLE";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getLists","loadOptionsDependsOn":["type"]}
     */
    readonly list?: string;

    /** Contact first name */
    readonly first_name?: string;

    /** Contact last name */
    readonly last_name?: string;

    /** Contact company name */
    readonly company_name?: string;

    /** Default: {} */
    readonly peopleAdditionalFields?: { full_name?: string, email?: string, company_name?: string, current_position?: string, domain?: string, linkedin_url?: string, location?: string, contact_id?: string };

    /** Default: {} */
    readonly companyAdditionalFields?: { linkedin_url?: string, domain?: string, location?: string, contact_id?: string };

    /**
     * Types of enrichment to perform
     * Default: ["email"]
     */
    readonly enrichmentType?: ("email" | "phone" | "profile")[];

    /** Contact first name */
    readonly firstName?: string;

    /** Contact last name */
    readonly lastName?: string;

    /** Contact company name, improves matching accuracy */
    readonly enrichCompanyName?: string;

    /** Contact company domain, improves matching accuracy */
    readonly enrichCompanyDomain?: string;

    /** Whether to flag if the contact changed company since the input data. Only effective when Enrichment Type includes Profile. */
    readonly detectJobChange?: boolean;

    /** Default: {} */
    readonly enrichAdditionalFields?: { email?: string, contactId?: string, jobTitle?: string, linkedinUrl?: string };

    /** Company domain to source contacts from. Provide at least one of domain, name or Linkedin URL. */
    readonly sourceCompanyDomain?: string;

    /** Company name to source contacts from */
    readonly sourceCompanyName?: string;

    /** Company Linkedin URL, increases coverage and accuracy by 25% */
    readonly sourceCompanyLinkedinUrl?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly personas?: { persona: Array<{ name: string, jobTitles: string, excludeJobTitles?: string }> };

    /** Default: {} */
    readonly sourceAdditionalFields?: { disableCompanyInfo?: boolean, includedLocations?: string, maxResults?: number, seniorityLevels?: ("c-suite" | "director" | "entry" | "founder" | "head" | "intern" | "manager" | "owner" | "partner" | "senior" | "vp")[] };

    /** Company domain to look up. Provide at least one of domain, Linkedin ID, slug or name. */
    readonly searchDomain?: string;

    /** Numeric Linkedin company ID (the digits in the linkedin.com/company/ URL) */
    readonly searchLinkedinId?: string;

    /** Linkedin universal name / slug (the trailing segment of the company URL) */
    readonly searchSlug?: string;

    /** Company name. Best-effort match — prefer domain, Linkedin ID or slug for a deterministic result. */
    readonly searchName?: string;

    /** Whether to fall back to on-demand enrichment when no cached match is found, and attach a headcount breakdown when possible */
    readonly searchEnrich?: boolean;

}
