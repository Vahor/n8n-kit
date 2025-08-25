// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PayPal/PayPal.node.ts' node

export const description = "Consume PayPal API" as const;
export const type = "n8n-nodes-base.payPal" as const;
export const version = 1 as const;
export const credentials = [{"name":"payPalApi","required":true,"testedBy":"payPalApiTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PayPalNodeParameters {
    /** Default: "payout" */
    readonly resource?: "payout" | "payoutItem";

    /** Default: "create" */
    readonly operation?: "create" | "get" | "cancel" | "get";

    /** A sender-specified ID number. Tracks the payout in an accounting system. */
    readonly senderBatchId?: string;

    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly itemsUi?: { itemsValues: { recipientType?: "phone" | "email" | "paypalId", receiverValue: string, currency?: "AUD" | "BRL" | "CAD" | "CZK" | "DKK" | "EUR" | "USD", amount: string, note?: string, senderItemId?: string, recipientWallet?: "paypal" | "venmo" } };

    /**
     * An array of individual payout items
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly itemsJson?: string;

    /** Default: {} */
    readonly additionalFields?: { emailSubject?: string, emailMessage?: string, note?: string };

    /** The ID of the payout for which to show details */
    readonly payoutBatchId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"maxValue":1000,"minValue":1}
     */
    readonly limit?: number;

    /** The ID of the payout item for which to show details */
    readonly payoutItemId?: string;

}
