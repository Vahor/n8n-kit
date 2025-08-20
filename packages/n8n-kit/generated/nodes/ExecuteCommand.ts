// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/ExecuteCommand/ExecuteCommand.node.js' node

export const name = "executeCommand" as const;
export const description = "Executes a command on the host" as const;
export const version = 1 as const;
export const defaults = {"name":"Execute Command","color":"#886644"} as const;

/**
 * Executes a command on the host
 */
export interface ExecuteCommandNodeParameters {

    /**
     * Whether to execute only once instead of once for each entry
     * Default: true
     */
    readonly executeOnce?: boolean;

    /**
     * The command to execute
     * Type options: {"rows":5}
     */
    readonly command: string;


}

