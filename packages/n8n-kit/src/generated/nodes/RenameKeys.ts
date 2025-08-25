// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RenameKeys/RenameKeys.node.ts' node

export const description = "Update item field names" as const;
export const type = "n8n-nodes-base.renameKeys" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface RenameKeysNodeParameters {
    /**
     * Adds a key which should be renamed
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly keys?: { key: Array<{ currentKey?: string, newKey?: string }> };

    /** Default: {} */
    readonly additionalOptions?: { regexReplacement?: { replacements: Array<{ regExNotice?: string, searchRegex?: string, replaceRegex?: string, options?: { caseInsensitive?: boolean, depth?: number } }> } };

}
