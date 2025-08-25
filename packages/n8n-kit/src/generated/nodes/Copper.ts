// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Copper/Copper.node.ts' node

export const description = "Consume the Copper API" as const;
export const type = "n8n-nodes-base.copper" as const;
export const version = 1 as const;
export const credentials = [{"name":"copperApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CopperNodeParameters {
    /** Default: "company" */
    readonly resource?: "company" | "customerSource" | "lead" | "opportunity" | "person" | "project" | "task" | "user";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "getAll";

    /** Name of the company to create */
    readonly name?: string;

    /** Default: {} */
    readonly additionalFields?: { address?: { addressFields: { street?: string, city?: string, state?: string, postal_code?: string, country?: string } }, details?: string, email_domain?: string, phone_numbers?: { phoneFields: { number?: string, category?: string } } } | { address?: { addressFields: { street?: string, city?: string, state?: string, postal_code?: string, country?: string } }, email?: { emailFields: { email?: string, category?: string } }, phone_numbers?: { phoneFields: { number?: string, category?: string } } } | { address?: { addressFields: { street?: string, city?: string, state?: string, postal_code?: string, country?: string } }, details?: string, email_domain?: string, emails?: { emailFields: { email?: string, category?: string } }, phone_numbers?: { phoneFields: { number?: string, category?: string } } } | { assignee_id?: string, details?: string, status?: "Completed" | "Open" } | { assignee_id?: string, details?: string, priority?: "High" | "None", status?: "Completed" | "Open" };

    /** ID of the company to delete */
    readonly companyId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filterFields?: { country?: "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "CV" | "KH" | "CM" | "CA" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CD" | "CG" | "CK" | "CR" | "CI" | "HR" | "CU" | "CW" | "CY" | "CZ" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "RE" | "RO" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SZ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "UM" | "US" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW", name?: string } | { country?: string, name?: string } | { company_ids?: string, customer_source_ids?: string } | { name?: string } | { assignee_ids?: string, project_ids?: string };

    /** Default: {} */
    readonly updateFields?: { address?: { addressFields: { street?: string, city?: string, state?: string, postal_code?: string, country?: string } }, details?: string, name?: string, phone_numbers?: { phoneFields: { number?: string, category?: string } } } | { address?: { addressFields: { street?: string, city?: string, state?: string, postal_code?: string, country?: string } }, details?: string, email?: { emailFields: { email?: string, category?: string } }, name?: string, phone_numbers?: { phoneFields: { number?: string, category?: string } } } | { customer_source_id?: string, name?: string, primary_contact_id?: string } | { address?: { addressFields: { street?: string, city?: string, state?: string, postal_code?: string, country?: string } }, details?: string, email_domain?: string, emails?: { emailFields: { email?: string, category?: string } }, name?: string, phone_numbers?: { phoneFields: { number?: string, category?: string } } } | { assignee_id?: string, details?: string, name?: string, status?: "Completed" | "Open" } | { assignee_id?: string, details?: string, name?: string, priority?: "High" | "None", status?: "Completed" | "Open" };

    /** ID of the lead to delete */
    readonly leadId?: string;

    /** ID of the customer source that generated this opportunity */
    readonly customerSourceId?: string;

    /** ID of the primary company associated with this opportunity */
    readonly primaryContactId?: string;

    /** ID of the opportunity to delete */
    readonly opportunityId?: string;

    /** ID of the person to delete */
    readonly personId?: string;

    /** ID of the project to delete */
    readonly projectId?: string;

    /** ID of the task to delete */
    readonly taskId?: string;

}
