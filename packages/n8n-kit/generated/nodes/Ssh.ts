// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Ssh/Ssh.node.ts' node

export const name = "ssh" as const;
export const description = "Execute commands via SSH" as const;
export const version = 1 as const;

/**
 * Execute commands via SSH
 */
export interface SshNodeParameters {

    /**
     * Default: "password"
     */
    readonly authentication?: "password" | "privateKey";

    /**
     * Default: "command"
     */
    readonly resource?: "command" | "file";

    /**
     * Default: "execute"
     */
    readonly operation?: "execute" | "download" | "upload";

    /**
     * The command to be executed on a remote device
     */
    readonly command?: string;

    /**
     * Default: "/"
     */
    readonly cwd?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The directory to upload the file to. The name of the file does not need to be specified, it's taken from the binary data file name. To override this behavior, set the parameter "File Name" under options.
     */
    readonly path?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fileName"?: string };


}

