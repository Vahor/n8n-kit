// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Peekalink/Peekalink.node.ts' node

export const description = "Consume the Peekalink API" as const;
export const type = "n8n-nodes-base.peekalink" as const;
export const version = 1 as const;
export const credentials = [{"name":"peekalinkApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PeekalinkNodeParameters {
    /** Default: "preview" */
    readonly operation?: "isAvailable" | "preview";

    readonly url?: string;

}
