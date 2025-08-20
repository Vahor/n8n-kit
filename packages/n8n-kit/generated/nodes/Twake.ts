// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Twake/Twake.node.js' node

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
     * Channel's ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
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

