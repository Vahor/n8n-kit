// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cockpit/Cockpit.node.ts' node

export const name = "cockpit" as const;
export const description = "Consume Cockpit API" as const;
export const version = 1 as const;

/**
 * Consume Cockpit API
 */
export interface CockpitNodeParameters {

    /**
     * Default: "collection"
     */
    readonly resource?: "collection" | "form" | "singleton";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "getAll" | "update" | "submit" | "get";

    /**
     * Name of the collection to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCollections"}
     */
    readonly collection?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: string, "filter"?: string, "language"?: string, "populate"?: boolean, "rawData"?: boolean, "skip"?: number, "sort"?: string };

    /**
     */
    readonly id?: string;

    /**
     * Whether new entry fields should be set via the value-key pair UI or JSON
     */
    readonly jsonDataFields?: boolean | boolean;

    /**
     * Entry data to send as JSON
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly dataFieldsJson?: string | string;

    /**
     * Entry data to send
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly dataFieldsUi?: { "field": any } | { "field": any };

    /**
     * Name of the form to operate on
     */
    readonly form?: string;

    /**
     * Name of the singleton to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSingletons"}
     */
    readonly singleton?: string;


}

