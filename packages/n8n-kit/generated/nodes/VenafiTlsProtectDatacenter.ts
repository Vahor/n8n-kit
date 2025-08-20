// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Venafi/Datacenter/VenafiTlsProtectDatacenter.node.ts' node

export const name = "venafiTlsProtectDatacenter" as const;
export const description = "Consume Venafi TLS Protect Datacenter" as const;
export const version = 1 as const;
export const defaults = {"name":"Venafi TLS Protect Datacenter"} as const;
export const credentials = [{"name":"venafiTlsProtectDatacenterApi","required":true}] as const

/**
 * Consume Venafi TLS Protect Datacenter
 */
export interface VenafiTlsProtectDatacenterNodeParameters {

    /**
     * Default: "certificate"
     */
    readonly resource?: "certificate" | "policy";


}

