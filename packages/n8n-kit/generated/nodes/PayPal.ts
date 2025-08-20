// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/PayPal/PayPal.node.ts' node

export const name = "payPal" as const;
export const description = "Consume PayPal API" as const;
export const version = 1 as const;
export const defaults = {"name":"PayPal"} as const;
export const credentials = [{"name":"payPalApi","required":true,"testedBy":"payPalApiTest"}] as const

/**
 * Consume PayPal API
 */
export interface PayPalNodeParameters {

    /**
     * Default: "payout"
     */
    readonly resource?: "payout" | "payoutItem";


}

