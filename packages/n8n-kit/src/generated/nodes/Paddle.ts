// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Paddle/Paddle.node.ts' node

export const description = "Consume Paddle API" as const;
export const type = "n8n-nodes-base.paddle" as const;
export const version = 1 as const;
export const credentials = [{"name":"paddleApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PaddleNodeParameters {
    /**
     * Default: "coupon"
     */
    readonly resource?: "coupon" | "payment" | "plan" | "product" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "getAll" | "update" | "getAll" | "reschedule" | "get" | "getAll" | "getAll";

    /**
     * Either product (valid for specified products or subscription plans) or checkout (valid for any checkout)
     * Default: "checkout"
     */
    readonly couponType?: "checkout" | "product";

    /**
     * Comma-separated list of product IDs. Required if coupon_type is product. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getProducts"}
     */
    readonly productIds?: any[];

    /**
     * Either flat or percentage
     * Default: "flat"
     */
    readonly discountType?: "flat" | "percentage";

    /**
     * Discount amount in currency
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly discountAmount?: number;

    /**
     * The currency must match the balance currency specified in your account
     * Default: "EUR"
     */
    readonly currency?: "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CNY" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "INR" | "JPY" | "KRW" | "MXN" | "NOK" | "NZD" | "PLN" | "RUB" | "SEK" | "SGD" | "THB" | "TWD" | "USD" | "ZAR";

    readonly jsonParameters?: boolean;

    /**
     * Attributes in JSON form
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly additionalFieldsJson?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "allowedUses"?: number, "couponCode"?: string, "couponPrefix"?: string, "description"?: string, "expires"?: string, "group"?: string, "numberOfCoupons"?: number, "recurring"?: boolean } | { "allowedUses"?: number, "discount"?: { "discountProperties": any }, "expires"?: string, "newCouponCode"?: string, "newGroup"?: string, "productIds"?: string, "recurring"?: boolean } | { "from"?: string, "to"?: string, "isPaid"?: boolean, "plan"?: string, "subscriptionId"?: number, "state"?: "active" | "past_due" | "paused" | "trialing", "isOneOffCharge"?: boolean } | { "planId"?: string, "subscriptionId"?: string, "state"?: "active" | "past_due" | "paused" | "trialing" };

    /**
     * The specific product/subscription ID
     */
    readonly productId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Either flat or percentage
     * Default: "couponCode"
     */
    readonly updateBy?: "couponCode" | "group";

    /**
     * Identify the coupon to update
     */
    readonly couponCode?: string;

    /**
     * The name of the group of coupons you want to update
     */
    readonly group?: string;

    /**
     * The upcoming subscription payment ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getPayments"}
     */
    readonly paymentId?: string;

    /**
     * Date you want to move the payment to
     */
    readonly date?: string;

    /**
     * Filter: The subscription plan ID
     */
    readonly planId?: string;

}
