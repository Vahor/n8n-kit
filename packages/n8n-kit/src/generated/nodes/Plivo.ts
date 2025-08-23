// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Plivo/Plivo.node.ts' node

export const description = "Send SMS/MMS messages or make phone calls" as const;
export const type = "n8n-nodes-base.plivo" as const;
export const version = 1 as const;
export const credentials = [{"name":"plivoApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PlivoNodeParameters {
    /**
     * Default: "sms"
     */
    readonly resource?: "call" | "mms" | "sms";

    /**
     * Default: "send"
     */
    readonly operation?: "send" | "make";

    /**
     * Plivo Number to send the SMS from
     */
    readonly from?: string;

    /**
     * Phone number to send the message to
     */
    readonly to?: string;

    /**
     * Message to send
     */
    readonly message?: string;

    /**
     * Comma-separated list of media URLs of the files from your file server
     */
    readonly media_urls?: string;

    /**
     * HTTP verb to be used when invoking the Answer URL
     * Default: "POST"
     */
    readonly answer_method?: "GET" | "POST";

    /**
     * URL to be invoked by Plivo once the call is answered. It should return the XML to handle the call once answered.
     */
    readonly answer_url?: string;

}
