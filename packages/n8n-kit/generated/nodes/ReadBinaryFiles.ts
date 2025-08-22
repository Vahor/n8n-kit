// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ReadBinaryFiles/ReadBinaryFiles.node.ts' node

export const name = "readBinaryFiles" as const;
export const description = "Reads binary files from disk" as const;
export const version = 1 as const;

/**
 * Reads binary files from disk
 */
export interface ReadBinaryFilesNodeParameters {

    /**
     * Pattern for files to read
     */
    readonly fileSelector: string;

    /**
     * Name of the binary property to which to write the data of the read files
     * Default: "data"
     */
    readonly dataPropertyName: string;


}

