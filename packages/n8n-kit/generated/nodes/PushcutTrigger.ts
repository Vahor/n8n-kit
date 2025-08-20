// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Pushcut/PushcutTrigger.node.ts' node

export const name = "pushcutTrigger" as const;
export const description = "Starts the workflow when Pushcut events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Pushcut Trigger"} as const;
export const credentials = [{"name":"pushcutApi","required":true}] as const

/**
 * Starts the workflow when Pushcut events occur
 */
export interface PushcutTriggerNodeParameters {

    /**
     * Choose any name you would like. It will show up as a server action in the app.
     */
    readonly actionName?: string;


}

