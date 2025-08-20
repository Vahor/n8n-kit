// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mindee/Mindee.node.ts' node

export const name = "mindee" as const;
export const description = "Consume Mindee API" as const;
export const version = 3 as const;
export const defaults = {"name":"Mindee"} as const;
export const credentials = [{"name":"mindeeReceiptApi","required":true,"displayOptions":{"show":{"resource":["receipt"]}}},{"name":"mindeeInvoiceApi","required":true,"displayOptions":{"show":{"resource":["invoice"]}}}] as const

/**
 * Consume Mindee API
 */
export interface MindeeNodeParameters {

    /**
     * Which Mindee API Version to use
     * Default: 1
     */
    readonly apiVersion?: "1" | "3" | "4";

    /**
     * Default: "receipt"
     */
    readonly resource?: "invoice" | "receipt";

    /**
     * Default: "predict"
     */
    readonly operation?: "predict";

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether to return the data exactly in the way it got received from the API
     */
    readonly rawData?: boolean;


}

