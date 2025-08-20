// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/DeepL/DeepL.node.ts' node

export const name = "deepL" as const;
export const description = "Translate data using DeepL" as const;
export const version = 1 as const;
export const defaults = {"name":"DeepL"} as const;
export const credentials = [{"name":"deepLApi","required":true}] as const

/**
 * Translate data using DeepL
 */
export interface DeepLNodeParameters {

    /**
     * Default: "language"
     */
    readonly resource?: "language";

    /**
     * Default: "translate"
     */
    readonly operation?: "translate";


}

