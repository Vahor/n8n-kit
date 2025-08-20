// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Keap/KeapTrigger.node.ts' node

export const name = "keapTrigger" as const;
export const description = "Starts the workflow when Infusionsoft events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Keap Trigger"} as const;
export const credentials = [{"name":"keapOAuth2Api","required":true}] as const

/**
 * Starts the workflow when Infusionsoft events occur
 */
export interface KeapTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly eventId: string;

    /**
     * Whether to return the data exactly in the way it got received from the API
     */
    readonly rawData?: boolean;


}

