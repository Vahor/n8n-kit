// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HelpScout/HelpScoutTrigger.node.ts' node

export const description = "Starts the workflow when Help Scout events occur" as const;
export const type = "n8n-nodes-base.helpScoutTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"helpScoutOAuth2Api","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface HelpScoutTriggerNodeParameters {

    /**
     * Default: []
     */
    readonly events?: ("convo.assigned" | "convo.created" | "convo.deleted" | "convo.merged" | "convo.moved" | "convo.status" | "convo.tags" | "convo.agent.reply.created" | "convo.customer.reply.created" | "convo.note.created" | "customer.created" | "satisfaction.ratings")[];


}

