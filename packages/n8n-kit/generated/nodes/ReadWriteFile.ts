// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Files/ReadWriteFile/ReadWriteFile.node.ts' node

export const name = "readWriteFile" as const;
export const description = "Read or write files from the computer that runs n8n" as const;
export const version = 1 as const;
export const defaults = {"name":"Read/Write Files from Disk"} as const;
export const credentials = undefined 

/**
 * Read or write files from the computer that runs n8n
 */
export interface ReadWriteFileNodeParameters {

    /**
     */
    readonly info?: string;

    /**
     * Default: "read"
     */
    readonly operation?: "read" | "write";


}

