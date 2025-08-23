// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cal/CalTrigger.node.ts' node

export const description = "Handle Cal.com events via webhooks" as const;
export const type = "n8n-nodes-base.calTrigger" as const;
export const version = 2 as const;
export const credentials = [{"name":"calApi","required":true}] as const;

/**
 * Handle Cal.com events via webhooks
 */
export interface CalTriggerNodeParameters {

    /**
     * Default: []
     */
    readonly events?: ("BOOKING_CANCELLED" | "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "MEETING_ENDED")[];

    /**
     * Default: 1
     */
    readonly version?: "1" | "2";

    /**
     * Default: {}
     */
    readonly options?: { "appId"?: string, "eventTypeId"?: string, "payloadTemplate"?: string };


}

