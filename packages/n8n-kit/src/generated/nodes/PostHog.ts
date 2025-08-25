// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PostHog/PostHog.node.ts' node

export const description = "Consume PostHog API" as const;
export const type = "n8n-nodes-base.postHog" as const;
export const version = 1 as const;
export const credentials = [{"name":"postHogApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PostHogNodeParameters {
    /** Default: "event" */
    readonly resource?: "alias" | "event" | "identity" | "track";

    /** Default: "create" */
    readonly operation?: "create" | "page" | "screen";

    /** The name of the alias */
    readonly alias?: string;

    /** The user's distinct ID */
    readonly distinctId?: string;

    /** Default: {} */
    readonly additionalFields?: { contextUi?: { contextValues: Array<{ key?: string, value?: string }> }, timestamp?: string } | { propertiesUi?: { propertyValues: Array<{ key?: string, value?: string }> }, timestamp?: string } | { propertiesUi?: { propertyValues: Array<{ key?: string, value?: string }> }, messageId?: string, timestamp?: string } | { category?: string, contextUi?: { contextValues: Array<{ key?: string, value?: string }> }, messageId?: string, propertiesUi?: { propertyValues: Array<{ key?: string, value?: string }> }, timestamp?: string };

    /** The name of the event */
    readonly eventName?: string;

    readonly name?: string;

}
