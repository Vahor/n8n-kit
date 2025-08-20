// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/HelpScout/HelpScoutTrigger.node.js' node

export const name = "helpScoutTrigger" as const;
export const description = "Starts the workflow when HelpScout events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"HelpScout Trigger"} as const;
export const credentials = [{"name":"helpScoutOAuth2Api","required":true}] as const

/**
 * Starts the workflow when HelpScout events occur
 */
export interface HelpScoutTriggerNodeParameters {

    /**
     * Default: []
     */
    readonly events: ("convo.assigned" | "convo.created" | "convo.deleted" | "convo.merged" | "convo.moved" | "convo.status" | "convo.tags" | "convo.agent.reply.created" | "convo.customer.reply.created" | "convo.note.created" | "customer.created" | "satisfaction.ratings")[];


}

