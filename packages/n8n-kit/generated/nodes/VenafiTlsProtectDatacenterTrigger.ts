// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Venafi/Datacenter/VenafiTlsProtectDatacenterTrigger.node.ts' node

export const name = "venafiTlsProtectDatacenterTrigger" as const;
export const description = "Starts the workflow when Venafi events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Venafi TLS Protect Datacenter​"} as const;
export const credentials = [{"name":"venafiTlsProtectDatacenterApi","required":true}] as const

/**
 * Starts the workflow when Venafi events occur
 */
export interface VenafiTlsProtectDatacenterTriggerNodeParameters {

    /**
     * Default: "certificateExpired"
     */
    readonly triggerOn: "certificateExpired";


}

