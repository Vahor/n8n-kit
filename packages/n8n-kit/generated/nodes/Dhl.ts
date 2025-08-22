// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Dhl/Dhl.node.ts' node

export const name = "dhl" as const;
export const description = "Consume DHL API" as const;
export const version = 1 as const;

/**
 * Consume DHL API
 */
export interface DhlNodeParameters {

    /**
     * Default: "shipment"
     */
    readonly resource?: any;

    /**
     * Default: "get"
     */
    readonly operation?: "get";

    /**
     */
    readonly trackingNumber: string;

    /**
     * Default: {}
     */
    readonly options?: { "recipientPostalCode"?: string };


}

