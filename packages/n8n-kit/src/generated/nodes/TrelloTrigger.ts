// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Trello/TrelloTrigger.node.ts' node

export const description = "Starts the workflow when Trello events occur" as const;
export const type = "n8n-nodes-base.trelloTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"trelloApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"trelloOAuth1Api","required":true,"displayOptions":{"show":{"authentication":["oAuth1"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface TrelloTriggerNodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth1";

    /** ID of the model of which to subscribe to events */
    readonly id?: string;

}
