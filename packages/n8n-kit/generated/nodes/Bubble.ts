// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Bubble/Bubble.node.ts' node

export const name = "bubble" as const;
export const description = "Consume the Bubble Data API" as const;
export const version = 1 as const;
export const defaults = {"name":"Bubble"} as const;
export const credentials = [{"name":"bubbleApi","required":true}] as const

/**
 * Consume the Bubble Data API
 */
export interface BubbleNodeParameters {

    /**
     * Default: "object"
     */
    readonly resource?: "object";


}

