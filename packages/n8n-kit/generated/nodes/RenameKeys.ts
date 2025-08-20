// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/RenameKeys/RenameKeys.node.js' node

export const name = "renameKeys" as const;
export const description = "Renames keys" as const;
export const version = 1 as const;
export const defaults = {"name":"Rename Keys","color":"#772244"} as const;

/**
 * Renames keys
 */
export interface RenameKeysNodeParameters {

    /**
     * Adds a key which should be renamed
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly keys?: { "key": any };

    /**
     * Default: {}
     */
    readonly additionalOptions?: { "regexReplacement"?: { "replacements": any } };


}

