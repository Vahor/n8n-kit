// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Compression/Compression.node.js' node

export const name = "compression" as const;
export const description = "Compress and decompress files" as const;
export const version = 1 as const;
export const defaults = {"name":"Compression","color":"#408000"} as const;

/**
 * Compress and decompress files
 */
export interface CompressionNodeParameters {

    /**
     * Default: "decompress"
     */
    readonly operation?: "compress" | "decompress";

    /**
     * Name of the binary property which contains the data for the file(s) to be compress/decompress. Multiple can be used separated by a comma (,).
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Format of the output file
     */
    readonly outputFormat?: "gzip" | "zip";

    /**
     * Name of the file to be compressed
     */
    readonly fileName?: string;

    /**
     * Name of the binary property to which to write the data of the compressed files
     * Default: "data"
     */
    readonly binaryPropertyOutput?: string;

    /**
     * Prefix use for all gzip compressed files
     * Default: "data"
     */
    readonly outputPrefix?: string;


}

