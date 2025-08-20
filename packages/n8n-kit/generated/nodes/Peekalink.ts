// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Peekalink/Peekalink.node.js' node

export const name = "peekalink" as const;
export const description = "Consume the Peekalink API" as const;
export const version = 1 as const;
export const defaults = {"name":"Peekalink"} as const;
export const credentials = [{"name":"peekalinkApi","required":true}] as const

/**
 * Consume the Peekalink API
 */
export interface PeekalinkNodeParameters {

    /**
     * Default: "preview"
     */
    readonly operation?: "isAvailable" | "preview";

    /**
     */
    readonly url: string;


}

