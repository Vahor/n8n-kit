// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Hubspot/HubspotTrigger.node.ts' node

export const description = "Starts the workflow when HubSpot events occur" as const;
export const type = "n8n-nodes-base.hubspotTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"hubspotDeveloperApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

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
