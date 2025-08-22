// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Wise/WiseTrigger.node.ts' node

export const name = "wiseTrigger" as const;
export const description = "Handle Wise events via webhooks" as const;
export const version = 1 as const;

/**
 * Handle Wise events via webhooks
 */
export interface WiseTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getProfiles"}
     */
    readonly profileId: string;

    /**
     */
    readonly event: "balanceCredit" | "balanceUpdate" | "transferActiveCases" | "tranferStateChange";


}

