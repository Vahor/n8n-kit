// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Pushcut/PushcutTrigger.node.ts' node

export const description = "Starts the workflow when Pushcut events occur" as const;
export const type = "n8n-nodes-base.pushcutTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"pushcutApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface PushcutTriggerNodeParameters {
    /**
     * Choose any name you would like. It will show up as a server action in the app.
     */
    readonly actionName?: string;

}
