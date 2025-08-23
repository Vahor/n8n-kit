// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Chargebee/Chargebee.node.ts' node

export const description = "Retrieve data from Chargebee API" as const;
export const type = "n8n-nodes-base.chargebee" as const;
export const version = 1 as const;
export const credentials = [{"name":"chargebeeApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ChargebeeNodeParameters {
    /**
     * Default: "invoice"
     */
    readonly resource?: "customer" | "invoice" | "subscription";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "list" | "pdfUrl" | "cancel" | "delete";

    /**
     * Properties to set on the new user
     * Default: {}
     */
    readonly properties?: { "id"?: string, "first_name"?: string, "last_name"?: string, "email"?: string, "phone"?: string, "company"?: string, "customProperties"?: { "property": any } };

    /**
     * Max. amount of results to return(< 100).
     * Default: 10
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly maxResults?: number;

    /**
     * Filter for invoices
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "date": any, "total": any };

    /**
     * The ID of the invoice to get
     */
    readonly invoiceId?: string;

    /**
     * The ID of the subscription to cancel
     */
    readonly subscriptionId?: string;

    /**
     * Whether it will not cancel it directly in will instead schedule the cancelation for the end of the term
     */
    readonly endOfTerm?: boolean;

}
