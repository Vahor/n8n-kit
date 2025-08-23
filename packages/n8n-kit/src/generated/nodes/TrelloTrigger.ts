// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Trello/TrelloTrigger.node.ts' node

export const description = "Starts the workflow when Trello events occur" as const;
export const type = "n8n-nodes-base.trelloTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"trelloApi","required":true}] as const;

/**
 * Starts the workflow when Trello events occur
 */
export interface TrelloTriggerNodeParameters {

    /**
     * ID of the model of which to subscribe to events
     */
    readonly id?: string;


}

