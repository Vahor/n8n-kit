// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Copper/CopperTrigger.node.js' node

export const name = "copperTrigger" as const;
export const description = "Handle Copper events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Copper Trigger"} as const;
export const credentials = [{"name":"copperApi","required":true}] as const

/**
 * Handle Copper events via webhooks
 */
export interface CopperTriggerNodeParameters {

    /**
     * The resource which will fire the event
     */
    readonly resource: "company" | "lead" | "opportunity" | "person" | "project" | "task";

    /**
     * The event to listen to
     */
    readonly event: "delete" | "new" | "update";


}

