// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Simulate/Simulate.node.ts' node

export const description = "Simulate a node" as const;
export const type = "n8n-nodes-base.simulate" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SimulateNodeParameters {
    /**
     * Select a type of node to show corresponding icon
     * Default: "n8n-nodes-base.noOp"
     * Type options: {"loadOptionsMethod":"getNodeTypes"}
     */
    readonly icon?: string;

    readonly subtitle?: string;

    /**
     * Default: "all"
     */
    readonly output?: "all" | "specify" | "custom";

    /**
     * Number input of items to return, if greater then input length all items will be returned
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly numberOfItems?: number;

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
