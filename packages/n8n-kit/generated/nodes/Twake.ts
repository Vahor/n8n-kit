// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Twake/Twake.node.ts' node

export const name = "twake" as const;
export const description = "Consume Twake API" as const;
export const version = 1 as const;
export const defaults = {"name":"Twake"} as const;
export const credentials = [{"name":"twakeCloudApi","required":true}] as const

/**
 * Consume Twake API
 */
export interface TwakeNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "message";

    /**
     * Default: "send"
     */
    readonly operation?: "send";

    /**
     * Channel's ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getChannels"}
     */
    readonly channelId?: string;

    /**
     * Message content
     */
    readonly content?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "senderIcon"?: string, "senderName"?: string };


}

