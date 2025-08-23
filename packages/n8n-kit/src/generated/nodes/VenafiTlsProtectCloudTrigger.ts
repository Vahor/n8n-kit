// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Venafi/ProtectCloud/VenafiTlsProtectCloudTrigger.node.ts' node

export const name = "venafiTlsProtectCloudTrigger" as const;
export const description = "Starts the workflow when Venafi events occur" as const;
export const version = 1 as const;
export const credentials = [{"name":"venafiTlsProtectCloudApi","required":true}] as const;

/**
 * Starts the workflow when Venafi events occur
 */
export interface VenafiTlsProtectCloudTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getActivityTypes"}
     */
    readonly resource: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getActivitySubTypes","loadOptionsDependsOn":["resource"]}
     */
    readonly triggerOn: any[];


}

