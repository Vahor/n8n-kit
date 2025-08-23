// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WooCommerce/WooCommerceTrigger.node.ts' node

export const description = "Handle WooCommerce events via webhooks" as const;
export const type = "n8n-nodes-base.wooCommerceTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"wooCommerceApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface WooCommerceTriggerNodeParameters {

    /**
     * Determines which resource events the webhook is triggered for
     */
    readonly event?: "coupon.created" | "coupon.deleted" | "coupon.updated" | "customer.created" | "customer.deleted" | "customer.updated" | "order.created" | "order.deleted" | "order.updated" | "product.created" | "product.deleted" | "product.updated";


}

