// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Pipedrive/Pipedrive.node.ts' node

export const description = "Create and edit data in Pipedrive" as const;
export const type = "n8n-nodes-base.pipedrive" as const;
export const version = 1 as const;
export const credentials = [{"name":"pipedriveApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}},"testedBy":{"request":{"method":"GET","url":"/users/me"}}},{"name":"pipedriveOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PipedriveNodeParameters {
    /** Default: "apiToken" */
    readonly authentication?: "apiToken" | "oAuth2";

    /** Default: "deal" */
    readonly resource?: "activity" | "deal" | "dealActivity" | "dealProduct" | "file" | "lead" | "note" | "organization" | "person" | "product";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "duplicate" | "get" | "getAll" | "search" | "update" | "getAll" | "add" | "getAll" | "remove" | "update" | "create" | "delete" | "download" | "get" | "update" | "create" | "delete" | "get" | "getAll" | "search" | "update";

    /** The subject of the activity to create */
    readonly subject?: string;

    /**
     * Whether the activity is done or not
     * Default: "0"
     */
    readonly done?: "0" | "1";

    /** Type of the activity like "call", "meeting", etc */
    readonly type?: string;

    /** Default: {} */
    readonly additionalFields?: { deal_id?: number, due_date?: string, note?: string, org_id?: string, person_id?: number, user_id?: string, customProperties?: { property: Array<{ name?: string, value?: string }> } } | { currency?: string, customProperties?: { property: Array<{ name?: string, value?: string }> }, label?: string, lost_reason?: string, org_id?: number, person_id?: number, probability?: number, stage_id?: string, status?: "open" | "won" | "lost" | "deleted", user_id?: string, value?: number, visible_to?: "1" | "3" } | { comments?: string, discount_percentage?: number, product_variation_id?: string } | { includeFields?: string, organizationId?: string, personId?: string, fields?: ("custom_fields" | "notes" | "title")[], status?: "open" | "won" | "lost" } | { activity_id?: number, deal_id?: number, org_id?: string, person_id?: number, product_id?: number } | { expected_close_date?: string, label_ids?: any[], organization_id?: number, owner_id?: string, person_id?: number, value?: { valueProperties: { amount?: number, currency?: "AFN" | "DZD" | "ARS" | "AUD" | "AZN" | "BSD" | "THB" | "BBD" | "BZD" | "BMD" | "BOB" | "BRL" | "BND" | "BGN" | "CAD" | "CLP" | "COP" | "NIO" | "CRC" | "CZK" | "DKK" | "DOP" | "VND" | "XCD" | "EGP" | "EUR" | "FJD" | "HUF" | "HKD" | "UAH" | "INR" | "JMD" | "KES" | "PGK" | "HRK" | "MMK" | "LAK" | "LBP" | "ALL" | "HNL" | "LRD" | "MYR" | "MUR" | "MXN" | "MAD" | "NPR" | "ILS" | "TWD" | "NZD" | "NOK" | "MRO" | "TOP" | "PKR" | "MOP" | "PHP" | "GBP" | "BWP" | "QAR" | "GTQ" | "ZAR" | "RON" | "MVR" | "IDR" | "RUB" | "SAR" | "SCR" | "SGD" | "PEN" | "SBD" | "LKR" | "SEK" | "CHF" | "SYP" | "BDT" | "WST" | "KZT" | "TTD" | "TRY" | "AED" | "USD" | "VUV" | "XOF" | "KRW" | "YER" | "JPY" | "CNY" | "PLN" } } } | { customProperties?: { property: Array<{ name?: string, value?: string }> }, label?: string, visible_to?: "1" | "3" } | { exactMatch?: boolean, fields?: ("address" | "custom_fields" | "name" | "notes")[], rawData?: boolean } | { customProperties?: { property: Array<{ name?: string, value?: string }> }, email?: string, label?: string, marketing_status?: "no_consent" | "unsubscribed" | "subscribed" | "archived", org_id?: string, phone?: string, visible_to?: "1" | "3", owner_id?: string } | { done?: boolean, exclude?: string } | { filterId?: string, firstChar?: string, sort?: string } | { exactMatch?: boolean, fields?: string, includeFields?: string, organizationId?: string, rawData?: boolean } | { deal_id?: number, lead_id?: number, org_id?: string, person_id?: number } | { done?: boolean, end_date?: string, filterId?: string, start_date?: string, type?: any[], user_id?: string };

    /** ID of the activity to delete */
    readonly activityId?: number;

    /** Default: {} */
    readonly updateFields?: { busy_flag?: boolean, deal_id?: number, due_date?: string, done?: "0" | "1", note?: string, org_id?: string, person_id?: number, public_description?: string, subject?: string, type?: string, user_id?: string, customProperties?: { property: Array<{ name?: string, value?: string }> } } | { currency?: string, customProperties?: { property: Array<{ name?: string, value?: string }> }, user_id?: string, label?: string, lost_reason?: string, org_id?: string, person_id?: number, probability?: number, stage_id?: string, status?: "open" | "won" | "lost" | "deleted", title?: string, value?: number, visible_to?: "1" | "3" } | { comments?: string, discount_percentage?: number, item_price?: number, quantity?: number, product_variation_id?: string } | { name?: string, description?: string } | { title?: string, owner_id?: string, label_ids?: any[], person_id?: string, value?: { valueProperties: { amount?: number, currency?: "AFN" | "DZD" | "ARS" | "AUD" | "AZN" | "BSD" | "THB" | "BBD" | "BZD" | "BMD" | "BOB" | "BRL" | "BND" | "BGN" | "CAD" | "CLP" | "COP" | "NIO" | "CRC" | "CZK" | "DKK" | "DOP" | "VND" | "XCD" | "EGP" | "EUR" | "FJD" | "HUF" | "HKD" | "UAH" | "INR" | "JMD" | "KES" | "PGK" | "HRK" | "MMK" | "LAK" | "LBP" | "ALL" | "HNL" | "LRD" | "MYR" | "MUR" | "MXN" | "MAD" | "NPR" | "ILS" | "TWD" | "NZD" | "NOK" | "MRO" | "TOP" | "PKR" | "MOP" | "PHP" | "GBP" | "BWP" | "QAR" | "GTQ" | "ZAR" | "RON" | "MVR" | "IDR" | "RUB" | "SAR" | "SCR" | "SGD" | "PEN" | "SBD" | "LKR" | "SEK" | "CHF" | "SYP" | "BDT" | "WST" | "KZT" | "TTD" | "TRY" | "AED" | "USD" | "VUV" | "XOF" | "KRW" | "YER" | "JPY" | "CNY" | "PLN" } }, expected_close_date?: string } | { content?: string, deal_id?: number, lead_id?: number, org_id?: string, person_id?: number } | { customProperties?: { property: Array<{ name?: string, value?: string }> }, label?: string, name?: string, owner_id?: number, visible_to?: "1" | "3" } | { customProperties?: { property: Array<{ name?: string, value?: string }> }, email?: string, label?: string, marketing_status?: "no_consent" | "unsubscribed" | "subscribed" | "archived", name?: string, org_id?: string, phone?: string, owner_id?: string, visible_to?: "1" | "3" };

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
    readonly dealId?: number | string;

    /**
     * The ID of the product to add to a deal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProducts"}
     */
    readonly productId?: string;

    /**
     * Price at which to add or update this product in a deal
     * Type options: {"numberPrecision":2}
     */
    readonly item_price?: number;

    /**
     * How many items of this product to add/update in a deal
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly quantity?: number;

    /**
     * ID of the deal-product (the ID of the product attached to the deal). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProductsDeal","loadOptionsDependsOn":["dealId"]}
     */
    readonly productAttachmentId?: string;

    /** The search term to look for. Minimum 2 characters (or 1 if using exact_match). */
    readonly term?: string;

    /** Whether only full exact matches against the given term are returned. It is not case sensitive. */
    readonly exactMatch?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

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

    /** By default do custom properties get returned only as ID instead of their actual name. Also option fields contain only the ID instead of their actual value. If this option gets set they get automatically resolved. */
    readonly resolveProperties?: boolean;

    /** By default do custom properties have to be set as ID instead of their actual name. Also option fields have to be set as ID instead of their actual value. If this option gets set they get automatically encoded. */
    readonly encodeProperties?: boolean;

    /** Default: {} */
    readonly filters?: { archived_status?: "archived" | "all" | "not_archived" } | { firstChar?: string, filterId?: string } | { filter_id?: string, stage_id?: string, status?: "all_not_deleted" | "deleted" | "lost" | "open" | "won", user_id?: string };

}
