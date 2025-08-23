// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Interval/Interval.node.ts' node

export const description = "Triggers the workflow in a given interval" as const;
export const type = "n8n-nodes-base.interval" as const;
export const version = 1 as const;
export const outputs = {"main":"main"} as const;

export interface IntervalNodeParameters {

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

