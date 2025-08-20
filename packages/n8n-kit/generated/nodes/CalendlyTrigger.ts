// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Calendly/CalendlyTrigger.node.js' node

export const name = "calendlyTrigger" as const;
export const description = "Starts the workflow when Calendly events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Calendly Trigger"} as const;
export const credentials = [{"name":"calendlyApi","required":true}] as const

/**
 * Starts the workflow when Calendly events occur
 */
export interface CalendlyTriggerNodeParameters {

    /**
     * Default: "user"
     */
    readonly scope: "organization" | "user";

    /**
     * Default: []
     */
    readonly events: ("invitee.created" | "invitee.canceled")[];


}

