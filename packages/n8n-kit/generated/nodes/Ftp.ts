// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Ftp/Ftp.node.ts' node

export const name = "ftp" as const;
export const description = "Transfer files via FTP or SFTP" as const;
export const version = 1 as const;

/**
 * Transfer files via FTP or SFTP
 */
export interface FtpNodeParameters {

    /**
     * File transfer protocol
     * Default: "ftp"
     */
    readonly protocol?: "ftp" | "sftp";

    /**
     * Default: "download"
     */
    readonly operation?: "delete" | "download" | "list" | "rename" | "upload";

    /**
     * The file path of the file to delete. Has to contain the full path.
     */
    readonly path?: string | string | string | string;

    /**
     * Default: {}
     */
    readonly options?: { "folder"?: boolean, "recursive"?: boolean } | { "enableConcurrentReads"?: boolean, "maxConcurrentReads"?: number, "chunkSize"?: number } | { "createDirectories"?: boolean };

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string | string;

    /**
     */
    readonly oldPath?: string;

    /**
     */
    readonly newPath?: string;

    /**
     * The text content of the file to upload
     * Default: true
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file to upload
     */
    readonly fileContent?: string;

    /**
     * Whether to return object representing all directories / objects recursively found within SFTP server
     */
    readonly recursive?: boolean;


}

