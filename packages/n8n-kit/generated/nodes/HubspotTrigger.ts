// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Hubspot/HubspotTrigger.node.ts' node

export const name = "hubspotTrigger" as const;
export const description = "Starts the workflow when HubSpot events occur" as const;
export const version = 1 as const;

/**
 * Starts the workflow when HubSpot events occur
 */
export interface HubspotTriggerNodeParameters {

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly eventsUi?: { "eventValues": any };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "maxConcurrentRequests"?: number };


}

