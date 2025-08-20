// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ProfitWell/ProfitWell.node.ts' node

export const name = "profitWell" as const;
export const description = "Consume ProfitWell API" as const;
export const version = 1 as const;
export const defaults = {"name":"ProfitWell"} as const;
export const credentials = [{"name":"profitWellApi","required":true}] as const

/**
 * Consume ProfitWell API
 */
export interface ProfitWellNodeParameters {

    /**
     * Default: "metric"
     */
    readonly resource?: "company" | "metric";


}

