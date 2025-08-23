// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Autopilot/AutopilotTrigger.node.ts' node

export const description = "Handle Autopilot events via webhooks" as const;
export const type = "n8n-nodes-base.autopilotTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"autopilotApi","required":true}] as const;

/**
 * Handle Autopilot events via webhooks
 */
export interface AutopilotTriggerNodeParameters {

    readonly event?: "contactAdded" | "contactAddedToList" | "contactEnteredSegment" | "contactLeftSegment" | "contactRemovedFromList" | "contactUnsubscribed" | "contactUpdated";


}

