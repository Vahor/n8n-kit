// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Signl4/Signl4.node.ts' node

export const description = "Consume SIGNL4 API" as const;
export const type = "n8n-nodes-base.signl4" as const;
export const version = 1 as const;
export const credentials = [{"name":"signl4Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface Signl4NodeParameters {
    /** Default: "alert" */
    readonly resource?: "alert";

    /** Default: "send" */
    readonly operation?: "send" | "resolve";

    /** A more detailed description for the alert */
    readonly message?: string;

    /** Default: {} */
    readonly additionalFields?: { "alertingScenario"?: "single_ack" | "multi_ack", "attachmentsUi"?: { "attachmentsBinary": any }, "externalId"?: string, "filtering"?: boolean, "locationFieldsUi"?: { "locationFieldsValues": any }, "service"?: string, "title"?: string };

    /** If the event originates from a record in a 3rd party system, use this parameter to pass the unique ID of that record. That ID will be communicated in outbound webhook notifications from SIGNL4, which is great for correlation/synchronization of that record with the alert. If you resolve / close an alert you must use the same External ID as in the original alert. */
    readonly externalId?: string;

}
