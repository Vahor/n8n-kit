// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Dhl/Dhl.node.ts' node

export const description = "Consume DHL API" as const;
export const type = "n8n-nodes-base.dhl" as const;
export const version = 1 as const;
export const credentials = [{"name":"dhlApi","required":true,"testedBy":"dhlApiCredentialTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DhlNodeParameters {
    /** Default: "get" */
    readonly operation?: "get";

    readonly trackingNumber?: string;

    /** Default: {} */
    readonly options?: { recipientPostalCode?: string };

}
