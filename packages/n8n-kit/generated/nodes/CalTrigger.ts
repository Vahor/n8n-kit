// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Cal/CalTrigger.node.js' node

export const name = "calTrigger" as const;
export const description = "Handle Cal events via webhooks" as const;
export const version = 2 as const;
export const defaults = {"name":"Cal Trigger"} as const;
export const credentials = [{"name":"calApi","required":true}] as const

/**
 * Handle Cal events via webhooks
 */
export interface CalTriggerNodeParameters {

    /**
     * Default: []
     */
    readonly events: ("BOOKING_CANCELLED" | "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "MEETING_ENDED")[];

    /**
     * Default: 1
     */
    readonly version?: "1" | "2";

    /**
     * Default: {}
     */
    readonly options?: { "appId"?: string, "eventTypeId"?: string, "payloadTemplate"?: string };


}

