// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/TimeSaved/TimeSaved.node.ts' node

export const description = "Track dynamic time savings for this workflow execution" as const;
export const type = "n8n-nodes-base.timeSaved" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TimeSavedNodeParameters {
    /** Default: "once" */
    readonly mode?: "once" | "perItem";

    /**
     * Number of minutes saved by this workflow execution
     * Type options: {"minValue":0}
     */
    readonly minutesSaved?: number;

}
