// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Iterable/Iterable.node.ts' node

export const description = "Consume Iterable API" as const;
export const type = "n8n-nodes-base.iterable" as const;
export const version = 1 as const;
export const credentials = [{"name":"iterableApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface IterableNodeParameters {
    /** Default: "user" */
    readonly resource?: "event" | "user" | "userList";

    /** Default: "track" */
    readonly operation?: "track" | "upsert" | "delete" | "get" | "add" | "remove";

    /** The name of the event to track */
    readonly name?: string;

    /** Default: {} */
    readonly additionalFields?: { campaignId?: string, createdAt?: string, dataFieldsUi?: { dataFieldValues: Array<{ key?: string, value?: string }> }, email?: string, id?: string, templateId?: string, userId?: string } | { dataFieldsUi?: { dataFieldValues: Array<{ key?: string, value?: string }> }, mergeNestedObjects?: boolean } | { campaignId?: number, channelUnsubscribe?: boolean };

    /** Identifier to be used */
    readonly identifier?: "email" | "userId";

    readonly value?: string;

    /**
     * Whether to create a new user if the idetifier does not exist
     * Default: true
     */
    readonly preferUserId?: boolean;

    /**
     * Identifier to be used
     * Default: "email"
     */
    readonly by?: "email" | "userId";

    /** Unique identifier for a particular user */
    readonly userId?: string;

    /** Email for a particular user */
    readonly email?: string;

    /**
     * Identifier to be used. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly listId?: string;

}
