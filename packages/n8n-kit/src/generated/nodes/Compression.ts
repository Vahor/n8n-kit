// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Compression/Compression.node.ts' node

export const description = "Compress and decompress files" as const;
export const type = "n8n-nodes-base.compression" as const;
export const version = 1.1 as const;

/**
 * Compress and decompress files
 */
export interface CompressionNodeParameters {

    /**
     * Default: "decompress"
     */
    readonly operation?: "compress" | "decompress";

    /**
     * To process more than one file, use a comma-separated list of the binary fields names
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Format of the output
     */
    readonly outputFormat?: "gzip" | "zip";

    /**
     * Name of the output file
     */
    readonly fileName?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyOutput?: string;

    /**
     * Prefix to add to the gzip file
     * Default: "data"
     */
    readonly outputPrefix?: string;


}

