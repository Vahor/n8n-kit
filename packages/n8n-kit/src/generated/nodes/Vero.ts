// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Vero/Vero.node.ts' node

export const description = "Consume Vero API" as const;
export const type = "n8n-nodes-base.vero" as const;
export const version = 1 as const;
export const credentials = [{"name":"veroApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface VeroNodeParameters {
    /** Default: "user" */
    readonly resource?: "user" | "event";

    /** Default: "create" */
    readonly operation?: "addTags" | "alias" | "create" | "delete" | "resubscribe" | "removeTags" | "unsubscribe" | "track";

    /** The unique identifier of the customer */
    readonly id?: string;

    readonly jsonParameters?: boolean;

    /** Default: {} */
    readonly additionalFields?: { "email"?: string };

    /**
     * Key value pairs that represent the custom user properties you want to update
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly dataAttributesUi?: { "dataAttributesValues": any };

    /**
     * Key value pairs that represent the custom user properties you want to update
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly dataAttributesJson?: string;

    /** The new unique identifier of the user */
    readonly newId?: string;

    /** Tags to add separated by "," */
    readonly tags?: string;

    readonly email?: string;

    /** The name of the event tracked */
    readonly eventName?: string;

    /**
     * Key value pairs that represent reserved, Vero-specific operators. Refer to the note on “deduplication” below.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly extraAttributesUi?: { "extraAttributesValues": any };

    /**
     * Key value pairs that represent reserved, Vero-specific operators. Refer to the note on “deduplication” below.
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly extraAttributesJson?: string;

}
