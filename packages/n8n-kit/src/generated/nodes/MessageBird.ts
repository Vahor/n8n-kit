// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MessageBird/MessageBird.node.ts' node

export const description = "Sends SMS via MessageBird" as const;
export const type = "n8n-nodes-base.messageBird" as const;
export const version = 1 as const;
export const credentials = [{"name":"messageBirdApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MessageBirdNodeParameters {
    /**
     * Default: "sms"
     */
    readonly resource?: "sms" | "balance";

    /**
     * Default: "send"
     */
    readonly operation?: "send" | "get";

    /**
     * The number from which to send the message
     */
    readonly originator?: string;

    /**
     * All recipients separated by commas
     */
    readonly recipients?: string;

    /**
     * The message to be send
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "createdDatetime"?: string, "datacoding"?: "auto" | "plain" | "unicode", "gateway"?: number, "groupIds"?: string, "mclass"?: "1" | "0", "reference"?: string, "reportUrl"?: string, "scheduledDatetime"?: string, "type"?: "binary" | "flash" | "sms", "typeDetails"?: string, "validity"?: number };

}
