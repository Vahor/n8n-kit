// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/ExecutionData/ExecutionData.node.js' node

export const name = "executionData" as const;
export const description = "Add execution data for search" as const;
export const version = 1 as const;
export const defaults = {"name":"Execution Data","color":"#29A568"} as const;

/**
 * Add execution data for search
 */
export interface ExecutionDataNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Default: "save"
     */
    readonly operation?: "save";

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Saved Field","multipleValues":true}
     */
    readonly dataToSave?: { "values": any };


}

