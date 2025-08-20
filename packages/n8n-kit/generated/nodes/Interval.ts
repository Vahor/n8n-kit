// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Interval/Interval.node.js' node

export const name = "interval" as const;
export const description = "Triggers the workflow in a given interval" as const;
export const version = 1 as const;
export const defaults = {"name":"Interval","color":"#00FF00"} as const;

/**
 * Triggers the workflow in a given interval
 */
export interface IntervalNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Interval value
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly interval?: number;

    /**
     * Unit of the interval value
     * Default: "seconds"
     */
    readonly unit?: "seconds" | "minutes" | "hours";


}

