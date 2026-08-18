// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cal/v2/CalTriggerV2.node.ts' node

export const description = "Handle Cal.com events via webhooks" as const;
export const type = "n8n-nodes-base.calTrigger" as const;
export const version = 3 as const;
export const credentials = [{"name":"calApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface CalTriggerV2NodeParameters {
    /** Default: [] */
    readonly events?: ("BOOKING_CANCELLED" | "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "MEETING_ENDED")[];

    /** Default: {} */
    readonly options?: { eventTypeId?: string, payloadTemplate?: string };

}
