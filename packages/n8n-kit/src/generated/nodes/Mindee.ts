// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mindee/Mindee.node.ts' node

export const description = "Consume Mindee API" as const;
export const type = "n8n-nodes-base.mindee" as const;
export const version = 3 as const;
export const credentials = [{"name":"mindeeReceiptApi","required":true,"displayOptions":{"show":{"resource":["receipt"]}}},{"name":"mindeeInvoiceApi","required":true,"displayOptions":{"show":{"resource":["invoice"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MindeeNodeParameters {
    /**
     * Which Mindee API Version to use
     * Default: 1
     */
    readonly apiVersion?: 1 | 3 | 4;

    /** Default: "receipt" */
    readonly resource?: "invoice" | "receipt";

    /** Default: "predict" */
    readonly operation?: "predict";

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** Whether to return the data exactly in the way it got received from the API */
    readonly rawData?: boolean;

}
