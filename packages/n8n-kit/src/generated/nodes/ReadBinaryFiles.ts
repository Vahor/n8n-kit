// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ReadBinaryFiles/ReadBinaryFiles.node.ts' node

export const description = "Reads binary files from disk" as const;
export const type = "n8n-nodes-base.readBinaryFiles" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ReadBinaryFilesNodeParameters {
    /**
     * Pattern for files to read
     */
    readonly fileSelector?: string;

    /**
     * Name of the binary property to which to write the data of the read files
     * Default: "data"
     */
    readonly dataPropertyName?: string;

}
