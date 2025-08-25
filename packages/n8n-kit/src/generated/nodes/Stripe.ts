// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Stripe/Stripe.node.ts' node

export const description = "Consume the Stripe API" as const;
export const type = "n8n-nodes-base.stripe" as const;
export const version = 1 as const;
export const credentials = [{"name":"stripeApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface StripeNodeParameters {
    /** Default: "balance" */
    readonly resource?: "balance" | "charge" | "coupon" | "customer" | "customerCard" | "source" | "token";

    /** Default: "get" */
    readonly operation?: "get" | "add" | "get" | "remove" | "create" | "get" | "getAll" | "update" | "create" | "getAll" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "create";

    /** ID of the customer to be associated with this card */
    readonly customerId?: string;

    /**
     * Token representing sensitive card information
     * Type options: {"password":true}
     */
    readonly token?: string;

    /** ID of the card to remove */
    readonly cardId?: string;

    /** ID of the source to retrieve */
    readonly sourceId?: string;

    /**
     * Amount in cents to be collected for this charge, e.g. enter <code>100</code> for $1.00
     * Type options: {"minValue":0,"maxValue":99999999}
     */
    readonly amount?: number;

    /**
     * Three-letter ISO currency code, e.g. <code>USD</code> or <code>EUR</code>. It must be a <a href="https://stripe.com/docs/currencies">Stripe-supported currency</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCurrencies"}
     */
    readonly currency?: string;

    /** ID of the customer's payment source to be charged */
    readonly source?: string;

    /** Default: {} */
    readonly additionalFields?: { description?: string, metadata?: { metadataProperties: Array<{ key?: string, value?: string }> }, receipt_email?: string, shipping?: { shippingProperties: Array<{ name?: string, address?: { details: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postal_code?: string } } }> } } | { address?: { details: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postal_code?: string } }, description?: string, email?: string, metadata?: { metadataProperties: Array<{ key?: string, value?: string }> }, phone?: string, shipping?: { shippingProperties: Array<{ name?: string, address?: { details: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postal_code?: string } }, phone?: string }> } } | { metadata?: { metadataProperties: Array<{ key?: string, value?: string }> }, statement_descriptor?: string };

    /** ID of the charge to retrieve */
    readonly chargeId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly updateFields?: { description?: string, metadata?: { metadataProperties: Array<{ key?: string, value?: string }> }, receipt_email?: string, shipping?: { shippingProperties: Array<{ name?: string, address?: { details: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postal_code?: string } } }> } } | { address?: { details: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postal_code?: string } }, description?: string, email?: string, metadata?: { metadataProperties: Array<{ key?: string, value?: string }> }, name?: string, phone?: string, shipping?: { shippingProperties: Array<{ name?: string, address?: { details: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postal_code?: string } }, phone?: string }> } };

    /**
     * How long the discount will be in effect
     * Default: "once"
     */
    readonly duration?: "forever" | "once";

    /**
     * Whether the coupon discount is a percentage or a fixed amount
     * Default: "percent"
     */
    readonly type?: "fixedAmount" | "percent" | "wechat" | "cardToken";

    /**
     * Amount in cents to subtract from an invoice total, e.g. enter <code>100</code> for $1.00
     * Type options: {"minValue":0,"maxValue":99999999}
     */
    readonly amountOff?: number;

    /**
     * Percentage to apply with the coupon
     * Default: 1
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly percentOff?: number;

    /** Full name or business name of the customer to create */
    readonly name?: string;

    /** Default: {} */
    readonly filters?: { email?: string };

    readonly number?: string;

    /** Security code printed on the back of the card */
    readonly cvc?: string;

    /** Number of the month when the card will expire */
    readonly expirationMonth?: string;

    /** Year when the card will expire */
    readonly expirationYear?: string;

}
