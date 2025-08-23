// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ReadBinaryFile/ReadBinaryFile.node.ts' node

export const description = "Reads a binary file from disk" as const;
export const type = "n8n-nodes-base.readBinaryFile" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ReadBinaryFileNodeParameters {
    /**
     * Path of the file to read
     */
    readonly filePath?: string;

    /**
     * Name of the binary property to which to write the data of the read file
     * Default: "data"
     */
    readonly dataPropertyName?: string;

}
