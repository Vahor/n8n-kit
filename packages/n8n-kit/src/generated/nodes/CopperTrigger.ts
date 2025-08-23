// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Copper/CopperTrigger.node.ts' node

export const description = "Handle Copper events via webhooks" as const;
export const type = "n8n-nodes-base.copperTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"copperApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface CopperTriggerNodeParameters {

    /**
     * The resource which will fire the event
     */
    readonly resource?: "company" | "lead" | "opportunity" | "person" | "project" | "task";

    /**
     * The event to listen to
     */
    readonly event?: "delete" | "new" | "update";


}

