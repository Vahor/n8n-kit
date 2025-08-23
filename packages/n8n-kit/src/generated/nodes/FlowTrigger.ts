// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Flow/FlowTrigger.node.ts' node

export const description = "Handle Flow events via webhooks" as const;
export const type = "n8n-nodes-base.flowTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"flowApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface FlowTriggerNodeParameters {

    /**
     * Resource that triggers the webhook
     */
    readonly resource?: "list" | "task";

    /**
     * Lists IDs, perhaps known better as "Projects" separated by a comma (,)
     */
    readonly listIds?: string;

    /**
     * Task IDs separated by a comma (,)
     */
    readonly taskIds?: string;


}

