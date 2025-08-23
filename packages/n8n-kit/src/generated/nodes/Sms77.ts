// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Sms77/Sms77.node.ts' node

export const description = "Send SMS and make text-to-speech calls" as const;
export const type = "n8n-nodes-base.sms77" as const;
export const version = 1 as const;
export const credentials = [{"name":"sms77Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface Sms77NodeParameters {
    /**
     * Default: "sms"
     */
    readonly resource?: "sms" | "voice";

    /**
     * Default: "send"
     */
    readonly operation?: "send";

    /**
     * The caller ID displayed in the receivers display. Max 16 numeric or 11 alphanumeric characters.
     */
    readonly from?: string;

    /**
     * The number of your recipient(s) separated by comma. Can be regular numbers or contact/groups from seven.
     */
    readonly to?: string;

    /**
     * The message to send. Max. 1520 characters
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly options?: { "delay"?: string, "foreign_id"?: string, "flash"?: boolean, "label"?: string, "performance_tracking"?: boolean, "ttl"?: number } | { "from"?: string };

}
