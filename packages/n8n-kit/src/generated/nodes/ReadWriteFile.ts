// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Files/ReadWriteFile/ReadWriteFile.node.ts' node

export const description = "Read or write files from the computer that runs n8n" as const;
export const type = "n8n-nodes-base.readWriteFile" as const;
export const version = 1.1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ReadWriteFileNodeParameters {
    /** Default: "read" */
    readonly operation?: "read" | "write";

    /** Specify a file's path or path pattern to read multiple files. Always use forward-slashes for path separator even on Windows. */
    readonly fileSelector?: string;

    /** Default: {} */
    readonly options?: { fileExtension?: string, fileName?: string, mimeType?: string, dataPropertyName?: string } | { append?: boolean };

    /** Path and name of the file that should be written. Also include the file extension. */
    readonly fileName?: string;

    /** Default: "data" */
    readonly dataPropertyName?: string;

}
