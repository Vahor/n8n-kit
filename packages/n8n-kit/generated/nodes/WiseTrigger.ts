// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Wise/WiseTrigger.node.js' node

export const name = "wiseTrigger" as const;
export const description = "Handle Wise events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Wise Trigger"} as const;
export const credentials = [{"name":"wiseApi","required":true}] as const

/**
 * Handle Wise events via webhooks
 */
export interface WiseTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getProfiles"}
     */
    readonly profileId: string;

    /**
     */
    readonly event: "balanceCredit" | "transferActiveCases" | "tranferStateChange";


}

