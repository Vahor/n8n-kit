// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Netscaler/ADC/NetscalerAdc.node.ts' node

export const name = "citrixAdc" as const;
export const description = "Consume Netscaler ADC API" as const;
export const version = 1 as const;
export const defaults = {"name":"Netscaler ADC"} as const;
export const credentials = [{"name":"citrixAdcApi","required":true}] as const

/**
 * Consume Netscaler ADC API
 */
export interface NetscalerAdcNodeParameters {

    /**
     * Default: "file"
     */
    readonly resource?: "certificate" | "file";


}

