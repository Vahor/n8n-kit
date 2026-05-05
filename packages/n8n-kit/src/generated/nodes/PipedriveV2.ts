// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Pipedrive/v2/PipedriveV2.node.ts' node

export const description = "Create and edit data in Pipedrive" as const;
export const type = "n8n-nodes-base.pipedrive" as const;
export const version = 2 as const;
export const credentials = [{"name":"pipedriveApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}},"testedBy":{"request":{"method":"GET","url":"/users/me"}}},{"name":"pipedriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PipedriveV2NodeParameters {
    /** Default: "apiToken" */
    readonly authentication?: "apiToken" | "oAuth2";

    /** Default: "deal" */
    readonly resource?: "activity" | "deal" | "dealProduct" | "file" | "lead" | "note" | "organization" | "person" | "product";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "duplicate" | "get" | "getAll" | "search" | "update" | "add" | "getAll" | "remove" | "update" | "create" | "delete" | "download" | "get" | "update" | "create" | "delete" | "get" | "getAll" | "search" | "update";

    /** The subject of the activity to create */
    readonly subject?: string;

    /** Whether the activity is done or not */
    readonly done?: boolean;

    /** Type of the activity like "call", "meeting", etc */
    readonly type?: string;

    /** Default: {} */
    readonly additionalFields?: { deal_id?: number, due_date?: string, note?: string, org_id?: string, person_id?: number, user_id?: string, customFields?: { property: Array<{ name?: string, value?: string }> } } | { currency?: string, expected_close_date?: string, label_ids?: unknown[], lost_reason?: string, org_id?: number, person_id?: number, probability?: number, stage_id?: string, status?: "open" | "won" | "lost" | "deleted", user_id?: string, value?: number, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { includeFields?: string, organizationId?: string, personId?: string, fields?: ("custom_fields" | "notes" | "title")[], status?: "open" | "won" | "lost" } | { comments?: string, discount?: number, discount_type?: "percentage" | "amount", tax?: number } | { activity_id?: number, deal_id?: number, lead_id?: string, org_id?: string, person_id?: number, product_id?: number } | { expected_close_date?: string, label_ids?: unknown[], organization_id?: number, owner_id?: string, person_id?: number, value?: { valueProperties: { amount?: number, currency?: "AFN" | "DZD" | "ARS" | "AUD" | "AZN" | "BSD" | "THB" | "BBD" | "BZD" | "BMD" | "BOB" | "BRL" | "BND" | "BGN" | "CAD" | "CLP" | "COP" | "NIO" | "CRC" | "CZK" | "DKK" | "DOP" | "VND" | "XCD" | "EGP" | "EUR" | "FJD" | "HUF" | "HKD" | "UAH" | "INR" | "JMD" | "KES" | "PGK" | "HRK" | "MMK" | "LAK" | "LBP" | "ALL" | "HNL" | "LRD" | "MYR" | "MUR" | "MXN" | "MAD" | "NPR" | "ILS" | "TWD" | "NZD" | "NOK" | "MRO" | "TOP" | "PKR" | "MOP" | "PHP" | "GBP" | "BWP" | "QAR" | "GTQ" | "ZAR" | "RON" | "MVR" | "IDR" | "RUB" | "SAR" | "SCR" | "SGD" | "PEN" | "SBD" | "LKR" | "SEK" | "CHF" | "SYP" | "BDT" | "WST" | "KZT" | "TTD" | "TRY" | "AED" | "USD" | "VUV" | "XOF" | "KRW" | "YER" | "JPY" | "CNY" | "PLN" } }, visible_to?: "1" | "3", was_seen?: boolean } | { deal_id?: number, lead_id?: string, org_id?: string, person_id?: number, pinned_to_deal_flag?: boolean, pinned_to_organization_flag?: boolean, pinned_to_person_flag?: boolean } | { label_ids?: unknown[], owner_id?: string, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { fields?: ("address" | "custom_fields" | "name" | "notes")[] } | { emails?: { emailProperties: Array<{ value?: string, primary?: boolean, label?: "home" | "work" | "other" }> }, label_ids?: unknown[], org_id?: string, owner_id?: string, phones?: { phoneProperties: Array<{ value?: string, primary?: boolean, label?: "home" | "mobile" | "work" | "other" }> }, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { includeFields?: string, organizationId?: string, fields?: ("custom_fields" | "email" | "name" | "notes" | "phone")[] } | { code?: string, owner_id?: number, prices?: { pricesValues: Array<{ price?: number, currency?: string, cost?: number }> }, tax?: number, unit?: string, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { includeFields?: string, fields?: ("code" | "custom_fields" | "name")[] };

    /** Whether to provide raw Pipedrive field keys and option IDs instead of human-readable names */
    readonly rawCustomFieldKeys?: boolean;

    /** ID of the activity to delete */
    readonly activityId?: number;

    /** Whether to show raw Pipedrive field keys and option IDs instead of human-readable names in output */
    readonly rawCustomFieldOutput?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { dealId?: number, done?: boolean, end_date?: string, filterId?: string, start_date?: string, type?: unknown[], user_id?: string } | { filter_id?: string, stage_id?: string, status?: "all_not_deleted" | "deleted" | "lost" | "open" | "won", user_id?: string } | { archived_status?: "all" | "archived" | "not_archived", organization_id?: number, owner_id?: string, person_id?: number } | { deal_id?: number, end_date?: string, lead_id?: string, org_id?: string, person_id?: number, pinned_to_deal_flag?: boolean, pinned_to_organization_flag?: boolean, pinned_to_person_flag?: boolean, sort?: "id" | "update_time" | "content", start_date?: string } | { first_char?: string, filter_id?: string };

    /** Default: {} */
    readonly updateFields?: { busy_flag?: boolean, deal_id?: number, done?: boolean, due_date?: string, note?: string, org_id?: string, person_id?: number, public_description?: string, subject?: string, type?: string, user_id?: string, customFields?: { property: Array<{ name?: string, value?: string }> } } | { currency?: string, expected_close_date?: string, label_ids?: unknown[], lost_reason?: string, org_id?: string, person_id?: number, probability?: number, stage_id?: string, status?: "open" | "won" | "lost" | "deleted", title?: string, user_id?: string, value?: number, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { comments?: string, discount?: number, discount_type?: "percentage" | "amount", item_price?: number, quantity?: number, tax?: number } | { name?: string, description?: string } | { expected_close_date?: string, is_archived?: boolean, label_ids?: unknown[], owner_id?: string, person_id?: string, title?: string, value?: { valueProperties: { amount?: number, currency?: "AFN" | "DZD" | "ARS" | "AUD" | "AZN" | "BSD" | "THB" | "BBD" | "BZD" | "BMD" | "BOB" | "BRL" | "BND" | "BGN" | "CAD" | "CLP" | "COP" | "NIO" | "CRC" | "CZK" | "DKK" | "DOP" | "VND" | "XCD" | "EGP" | "EUR" | "FJD" | "HUF" | "HKD" | "UAH" | "INR" | "JMD" | "KES" | "PGK" | "HRK" | "MMK" | "LAK" | "LBP" | "ALL" | "HNL" | "LRD" | "MYR" | "MUR" | "MXN" | "MAD" | "NPR" | "ILS" | "TWD" | "NZD" | "NOK" | "MRO" | "TOP" | "PKR" | "MOP" | "PHP" | "GBP" | "BWP" | "QAR" | "GTQ" | "ZAR" | "RON" | "MVR" | "IDR" | "RUB" | "SAR" | "SCR" | "SGD" | "PEN" | "SBD" | "LKR" | "SEK" | "CHF" | "SYP" | "BDT" | "WST" | "KZT" | "TTD" | "TRY" | "AED" | "USD" | "VUV" | "XOF" | "KRW" | "YER" | "JPY" | "CNY" | "PLN" } }, visible_to?: "1" | "3", was_seen?: boolean } | { content?: string, deal_id?: number, lead_id?: string, org_id?: string, person_id?: number, pinned_to_deal_flag?: boolean, pinned_to_organization_flag?: boolean, pinned_to_person_flag?: boolean } | { label_ids?: unknown[], name?: string, owner_id?: string, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { emails?: { emailProperties: Array<{ value?: string, primary?: boolean, label?: "home" | "work" | "other" }> }, label_ids?: unknown[], name?: string, org_id?: string, owner_id?: string, phones?: { phoneProperties: Array<{ value?: string, primary?: boolean, label?: "home" | "mobile" | "work" | "other" }> }, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } } | { code?: string, name?: string, owner_id?: number, prices?: { pricesValues: Array<{ price?: number, currency?: string, cost?: number }> }, tax?: number, unit?: string, visible_to?: "1" | "3", customFields?: { property: Array<{ name?: string, value?: string }> } };

    /** The title of the deal to create */
    readonly title?: string;

    /**
     * Type of entity to link to this deal
     * Default: "organization"
     */
    readonly associateWith?: "organization" | "person";

    /** ID of the organization this deal will be associated with */
    readonly org_id?: number;

    /** ID of the person this deal will be associated with */
    readonly person_id?: number;

    /** ID of the deal to delete */
    readonly dealId?: number;

    /** The search term to look for. Minimum 2 characters (or 1 if using exact_match). */
    readonly term?: string;

    /** Whether only full exact matches against the given term are returned. It is not case sensitive. */
    readonly exactMatch?: boolean;

    /** ID of the product to add to the deal */
    readonly productId?: number;

    /**
     * Price at which to add this product to the deal
     * Type options: {"numberPrecision":2}
     */
    readonly item_price?: number;

    /**
     * How many items of this product to add to the deal
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly quantity?: number;

    /** ID of the deal-product (the ID of the product attached to the deal, not the product ID itself) */
    readonly productAttachmentId?: number;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** ID of the file to delete */
    readonly fileId?: number;

    /** ID of the organization to link to this lead */
    readonly organization_id?: number;

    /** ID of the lead to delete */
    readonly leadId?: string;

    /**
     * The content of the note to create
     * Type options: {"rows":5}
     */
    readonly content?: string;

    /** ID of the note to delete */
    readonly noteId?: number;

    /** The name of the organization to create */
    readonly name?: string;

    /** ID of the organization to delete */
    readonly organizationId?: number;

    /** ID of the person to delete */
    readonly personId?: number;

}
