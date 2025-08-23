// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Calendly/CalendlyTrigger.node.ts' node

export const name = "calendlyTrigger" as const;
export const description = "Starts the workflow when Calendly events occur" as const;
export const version = 1 as const;
export const credentials = [{"name":"calendlyApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"calendlyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Starts the workflow when Calendly events occur
 */
export interface CalendlyTriggerNodeParameters {

    /**
     * Default: "apiKey"
     */
    readonly authentication?: "oAuth2" | "apiKey";

    readonly deprecationNotice?: string;

    /**
     * Default: "user"
     */
    readonly scope: "organization" | "user";

    /**
     * Default: []
     */
    readonly events: ("invitee.created" | "invitee.canceled")[];


}

