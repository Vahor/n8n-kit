// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Simulate/SimulateTrigger.node.ts' node

export const name = "simulateTrigger" as const;
export const description = "Simulate a trigger node" as const;
export const version = 1 as const;
export const defaults = {"name":"Simulate Trigger","color":"#b0b0b0"} as const;

/**
 * Simulate a trigger node
 */
export interface SimulateTriggerNodeParameters {

    /**
     * Select a type of node to show corresponding icon
     * Default: "n8n-nodes-base.manualTrigger"
     * Type options: {"loadOptionsMethod":"getNodeTypes"}
     */
    readonly icon?: string;

    /**
     */
    readonly subtitle?: string;

    /**
     * Default: "[\n  {\n  \"my_field_1\": \"value\",\n  \"my_field_2\": 1\n  }\n]"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Execution duration in milliseconds
     * Default: 150
     * Type options: {"minValue":0}
     */
    readonly executionDuration?: number;


}

