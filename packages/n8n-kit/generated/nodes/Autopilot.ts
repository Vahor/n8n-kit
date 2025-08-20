// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Autopilot/Autopilot.node.ts' node

export const name = "autopilot" as const;
export const description = "Consume Autopilot API" as const;
export const version = 1 as const;
export const defaults = {"name":"Autopilot"} as const;
export const credentials = [{"name":"autopilotApi","required":true}] as const

/**
 * Consume Autopilot API
 */
export interface AutopilotNodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "contact" | "contactJourney" | "contactList" | "list";


}

