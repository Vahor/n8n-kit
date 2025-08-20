// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Twilio/Twilio.node.js' node

export const name = "twilio" as const;
export const description = "Send SMS and WhatsApp messages or make phone calls" as const;
export const version = 1 as const;
export const defaults = {"name":"Twilio"} as const;
export const credentials = [{"name":"twilioApi","required":true}] as const

/**
 * Send SMS and WhatsApp messages or make phone calls
 */
export interface TwilioNodeParameters {

    /**
     * Default: "sms"
     */
    readonly resource?: "call" | "sms";

    /**
     * Default: "send"
     */
    readonly operation?: "send" | "make";

    /**
     * The number from which to send the message
     */
    readonly from?: string;

    /**
     * The number to which to send the message
     */
    readonly to?: string;

    /**
     * Whether the message should be sent to WhatsApp
     */
    readonly toWhatsapp?: boolean;

    /**
     * The message to send
     */
    readonly message?: string;

    /**
     * Whether to use the <a href="https://www.twilio.com/docs/voice/twiml">Twilio Markup Language</a> in the message
     */
    readonly twiml?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "statusCallback"?: string };


}

