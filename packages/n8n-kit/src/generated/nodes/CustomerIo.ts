// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CustomerIo/CustomerIo.node.ts' node

export const description = "Consume Customer.io API" as const;
export const type = "n8n-nodes-base.customerIo" as const;
export const version = 1 as const;
export const credentials = [{"name":"customerIoApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CustomerIoNodeParameters {
    /** Default: "customer" */
    readonly resource?: "customer" | "event" | "campaign" | "segment";

    /** Default: "get" */
    readonly operation?: "get" | "getAll" | "getMetrics" | "upsert" | "delete" | "track" | "trackAnonymous" | "add" | "remove";

    /** The unique identifier for the campaign */
    readonly campaignId?: number;

    /**
     * Specify metric period
     * Default: "days"
     */
    readonly period?: "hours" | "days" | "weeks" | "months";

    readonly jsonParameters?: boolean;

    /** Default: {} */
    readonly additionalFields?: { steps?: number, type?: "email" | "empty" | "push" | "slack" | "twilio" | "urbanAirship" | "webhook" } | { customProperties?: { customProperty: Array<{ key: string, value: string }> }, email?: string, createdAt?: string } | { customAttributes?: { customAttribute: Array<{ key: string, value: string }> }, type?: string } | { customAttributes?: { customAttribute: Array<{ key: string, value: string }> } };

    /** The unique identifier for the customer */
    readonly id?: string;

    /**
     * Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-companys---companies-api">here</a>
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly additionalFieldsJson?: string;

    /** The unique identifier for the customer */
    readonly customerId?: string;

    /** Name of the event to track */
    readonly eventName?: string;

    /** The unique identifier of the segment */
    readonly segmentId?: number;

    /** A list of customer IDs to add to the segment */
    readonly customerIds?: string;

}
