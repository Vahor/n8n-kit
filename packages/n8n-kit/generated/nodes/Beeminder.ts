// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Beeminder/Beeminder.node.js' node

export const name = "beeminder" as const;
export const description = "Consume Beeminder API" as const;
export const version = 1 as const;
export const defaults = {"name":"Beeminder"} as const;
export const credentials = [{"name":"beeminderApi","required":true}] as const

/**
 * Consume Beeminder API
 */
export interface BeeminderNodeParameters {

    /**
     * Default: "datapoint"
     */
    readonly resource: "datapoint";

    /**
     * Default: "create"
     */
    readonly operation: "create" | "delete" | "getAll" | "update";

    /**
     * The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getGoals"}
     */
    readonly goalName?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 30
     * Type options: {"minValue":1,"maxValue":300}
     */
    readonly limit?: number;

    /**
     * Datapoint value to send
     * Default: 1
     */
    readonly value?: number;

    /**
     */
    readonly datapointId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "comment"?: string, "timestamp"?: string, "requestid"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "sort"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "value"?: number, "comment"?: string, "timestamp"?: string };


}

