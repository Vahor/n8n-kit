// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Autopilot/AutopilotTrigger.node.js' node

export const name = "autopilotTrigger" as const;
export const description = "Handle Autopilot events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Autopilot Trigger"} as const;
export const credentials = [{"name":"autopilotApi","required":true}] as const

/**
 * Handle Autopilot events via webhooks
 */
export interface AutopilotTriggerNodeParameters {

    /**
     */
    readonly event: "contactAdded" | "contactAddedToList" | "contactEnteredSegment" | "contactLeftSegment" | "contactRemovedFromList" | "contactUnsubscribed" | "contactUpdated";


}

