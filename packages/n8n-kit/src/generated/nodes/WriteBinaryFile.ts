// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WriteBinaryFile/WriteBinaryFile.node.ts' node

export const description = "Writes a binary file to disk" as const;
export const type = "n8n-nodes-base.writeBinaryFile" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface WriteBinaryFileNodeParameters {
    /** Path to which the file should be written */
    readonly fileName?: string;

    /**
     * Name of the binary property which contains the data for the file to be written
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /** Default: {} */
    readonly options?: { "append"?: boolean };

}
