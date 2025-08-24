// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/AcuityScheduling/AcuitySchedulingTrigger.node.ts' node

export const description = "Handle Acuity Scheduling events via webhooks" as const;
export const type = "n8n-nodes-base.acuitySchedulingTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"acuitySchedulingApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"acuitySchedulingOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface AcuitySchedulingTriggerNodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth2";

    readonly event?: "appointment.canceled" | "appointment.changed" | "appointment.rescheduled" | "appointment.scheduled" | "order.completed";

    /**
     * By default does the webhook-data only contain the ID of the object. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

}
