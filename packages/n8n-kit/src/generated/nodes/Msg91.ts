// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Msg91/Msg91.node.ts' node

export const name = "msg91" as const;
export const description = "Sends transactional SMS via MSG91" as const;
export const version = 1 as const;
export const credentials = [{"name":"msg91Api","required":true}] as const;

/**
 * Sends transactional SMS via MSG91
 */
export interface Msg91NodeParameters {

    /**
     * Default: "sms"
     */
    readonly resource?: "sms";

    /**
     * Default: "send"
     */
    readonly operation?: "send";

    /**
     * The number from which to send the message
     */
    readonly from?: string;

    /**
     * The number, with coutry code, to which to send the message
     */
    readonly to?: string;

    /**
     * The message to send
     */
    readonly message?: string;


}

