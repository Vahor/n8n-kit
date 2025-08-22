// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RenameKeys/RenameKeys.node.ts' node

export const name = "renameKeys" as const;
export const description = "Update item field names" as const;
export const version = 1 as const;

/**
 * Update item field names
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

