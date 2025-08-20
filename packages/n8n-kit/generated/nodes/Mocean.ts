// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Mocean/Mocean.node.js' node

export const name = "mocean" as const;
export const description = "Send SMS and voice messages via Mocean" as const;
export const version = 1 as const;
export const defaults = {"name":"Mocean"} as const;
export const credentials = [{"name":"moceanApi","required":true,"testedBy":"moceanApiTest"}] as const

/**
 * Send SMS and voice messages via Mocean
 */
export interface MoceanNodeParameters {

    /**
     * Default: "sms"
     */
    readonly resource?: "sms" | "voice";

    /**
     * Default: "send"
     */
    readonly operation?: "send";

    /**
     * Number to which to send the message
     */
    readonly from?: string;

    /**
     * Number from which to send the message
     */
    readonly to?: string;

    /**
     * Default: "en-US"
     */
    readonly language?: "cmn-CN" | "en-GB" | "en-US" | "ja-JP" | "ko-KR";

    /**
     * Message to send
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly options?: { "dlrUrl"?: string };


}

