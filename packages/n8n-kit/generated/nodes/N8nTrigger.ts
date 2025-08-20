// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/N8nTrigger/N8nTrigger.node.js' node

export const name = "n8nTrigger" as const;
export const description = "Handle events and perform actions on your n8n instance" as const;
export const version = 1 as const;
export const defaults = {"name":"n8n Trigger"} as const;

/**
 * Handle events and perform actions on your n8n instance
 */
export interface N8nTriggerNodeParameters {

    /**
     * Specifies under which conditions an execution should happen: <b>Instance started</b>: Triggers when this n8n instance is started or re-started
     * Default: []
     */
    readonly events: ("init")[];


}

