// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Simulate/Simulate.node.ts' node

export const name = "simulate" as const;
export const description = "Simulate a node" as const;
export const version = 1 as const;
export const defaults = {"name":"Simulate","color":"#b0b0b0"} as const;
export const credentials = undefined 

/**
 * Simulate a node
 */
export interface SimulateNodeParameters {

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


}

