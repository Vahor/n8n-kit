// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WooCommerce/WooCommerceTrigger.node.ts' node

export const name = "wooCommerceTrigger" as const;
export const description = "Handle WooCommerce events via webhooks" as const;
export const version = 1 as const;

/**
 * Handle WooCommerce events via webhooks
 */
export interface WooCommerceTriggerNodeParameters {

    /**
     * Determines which resource events the webhook is triggered for
     */
    readonly event: "coupon.created" | "coupon.deleted" | "coupon.updated" | "customer.created" | "customer.deleted" | "customer.updated" | "order.created" | "order.deleted" | "order.updated" | "product.created" | "product.deleted" | "product.updated";


}

