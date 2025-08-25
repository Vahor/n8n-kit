// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Vonage/Vonage.node.ts' node

export const description = "Consume Vonage API" as const;
export const type = "n8n-nodes-base.vonage" as const;
export const version = 1 as const;
export const credentials = [{"name":"vonageApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface VonageNodeParameters {
    /** Default: "sms" */
    readonly resource?: "sms";

    /** Default: "send" */
    readonly operation?: "send";

    /** The name or number the message should be sent from */
    readonly from?: string;

    /** The number that the message should be sent to. Numbers are specified in E.164 format. */
    readonly to?: string;

    /** The body of the message being sent */
    readonly message?: string;

    /** Default: {} */
    readonly additionalFields?: { "account-ref"?: string, callback?: string, "client-ref"?: string, "message-class"?: 0 | 1 | 2 | 3, "protocol-id"?: string, "status-report-req"?: boolean, ttl?: number };

}
