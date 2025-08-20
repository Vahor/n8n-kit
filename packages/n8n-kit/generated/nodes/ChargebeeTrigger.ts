// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Chargebee/ChargebeeTrigger.node.ts' node

export const name = "chargebeeTrigger" as const;
export const description = "Starts the workflow when Chargebee events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Chargebee Trigger"} as const;

/**
 * Starts the workflow when Chargebee events occur
 */
export interface ChargebeeTriggerNodeParameters {

    /**
     * Default: []
     */
    readonly events: ("*" | "card_added" | "card_deleted" | "card_expired" | "card_expiring" | "card_updated" | "customer_changed" | "customer_created" | "customer_deleted" | "invoice_created" | "invoice_deleted" | "invoice_generated" | "invoice_updated" | "payment_failed" | "payment_initiated" | "payment_refunded" | "payment_succeeded" | "refund_initiated" | "subscription_activated" | "subscription_cancellation_scheduled" | "subscription_cancelled" | "subscription_cancelling" | "subscription_changed" | "subscription_created" | "subscription_deleted" | "subscription_reactivated" | "subscription_renewal_reminder" | "subscription_renewed" | "subscription_scheduled_cancellation_removed" | "subscription_shipping_address_updated" | "subscription_started" | "subscription_trial_ending" | "transaction_created" | "transaction_deleted" | "transaction_updated")[];


}

