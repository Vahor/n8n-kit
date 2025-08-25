// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mocean/Mocean.node.ts' node

export const description = "Send SMS and voice messages via Mocean" as const;
export const type = "n8n-nodes-base.mocean" as const;
export const version = 1 as const;
export const credentials = [{"name":"moceanApi","required":true,"testedBy":"moceanApiTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MoceanNodeParameters {
    /** Default: "sms" */
    readonly resource?: "sms" | "voice";

    /** Default: "send" */
    readonly operation?: "send";

    /** Number to which to send the message */
    readonly from?: string;

    /** Number from which to send the message */
    readonly to?: string;

    /** Default: "en-US" */
    readonly language?: "cmn-CN" | "en-GB" | "en-US" | "ja-JP" | "ko-KR";

    /** Message to send */
    readonly message?: string;

    /** Default: {} */
    readonly options?: { dlrUrl?: string };

}
