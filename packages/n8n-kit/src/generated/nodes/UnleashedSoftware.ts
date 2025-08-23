// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/UnleashedSoftware/UnleashedSoftware.node.ts' node

export const name = "unleashedSoftware" as const;
export const description = "Consume Unleashed Software API" as const;
export const version = 1 as const;
export const credentials = [{"name":"unleashedSoftwareApi","required":true}] as const;

/**
 * Consume Unleashed Software API
 */
export interface UnleashedSoftwareNodeParameters {

    /**
     * Default: "salesOrder"
     */
    readonly resource?: "salesOrder" | "stockOnHand";

    /**
     * Default: "getAll"
     */
    readonly operation?: "getAll" | "get" | "getAll";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "customerId"?: string, "customerCode"?: string, "endDate"?: string, "modifiedSince"?: string, "orderNumber"?: string, "orderStatus"?: ("Backordered" | "Completed" | "Deleted" | "Parked" | "Placed")[], "startDate"?: string } | { "asAtDate"?: string, "IsAssembled"?: boolean, "modifiedSince"?: string, "orderBy"?: string, "productId"?: string, "warehouseCode"?: string, "warehouseName"?: string };

    /**
     */
    readonly productId?: string;


}

