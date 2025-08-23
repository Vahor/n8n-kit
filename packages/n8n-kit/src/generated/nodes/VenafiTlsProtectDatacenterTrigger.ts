// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Venafi/Datacenter/VenafiTlsProtectDatacenterTrigger.node.ts' node

export const description = "Starts the workflow when Venafi events occur" as const;
export const type = "n8n-nodes-base.venafiTlsProtectDatacenterTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"venafiTlsProtectDatacenterApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface VenafiTlsProtectDatacenterTriggerNodeParameters {
    /**
     * Default: "certificateExpired"
     */
    readonly triggerOn?: "certificateExpired";

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
