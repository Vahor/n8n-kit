// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PostHog/PostHog.node.ts' node

export const name = "postHog" as const;
export const description = "Consume PostHog API" as const;
export const version = 1 as const;

/**
 * Consume PostHog API
 */
export interface PostHogNodeParameters {

    /**
     * Default: "event"
     */
    readonly resource?: "alias" | "event" | "identity" | "track";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "create" | "create" | "page" | "screen";

    /**
     * The name of the alias
     */
    readonly alias?: string;

    /**
     * The user's distinct ID
     */
    readonly distinctId?: string | string | string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "contextUi"?: { "contextValues": any }, "timestamp"?: string } | { "propertiesUi"?: { "propertyValues": any }, "timestamp"?: string } | { "propertiesUi"?: { "propertyValues": any }, "messageId"?: string, "timestamp"?: string } | { "category"?: string, "contextUi"?: { "contextValues": any }, "messageId"?: string, "propertiesUi"?: { "propertyValues": any }, "timestamp"?: string };

    /**
     * The name of the event
     */
    readonly eventName?: string;

    /**
     */
    readonly name?: string;


}

