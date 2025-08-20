// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/WriteBinaryFile/WriteBinaryFile.node.js' node

export const name = "writeBinaryFile" as const;
export const description = "Writes a binary file to disk" as const;
export const version = 1 as const;
export const defaults = {"name":"Write Binary File","color":"#CC2233"} as const;

/**
 * Writes a binary file to disk
 */
export interface WriteBinaryFileNodeParameters {

    /**
     * Path to which the file should be written
     */
    readonly fileName: string;

    /**
     * Name of the binary property which contains the data for the file to be written
     * Default: "data"
     */
    readonly dataPropertyName: string;

    /**
     * Default: {}
     */
    readonly options?: { "append"?: boolean };


}

