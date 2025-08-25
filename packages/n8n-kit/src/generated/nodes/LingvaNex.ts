// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/LingvaNex/LingvaNex.node.ts' node

export const description = "Consume LingvaNex API" as const;
export const type = "n8n-nodes-base.lingvaNex" as const;
export const version = 1 as const;
export const credentials = [{"name":"lingvaNexApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface LingvaNexNodeParameters {
    /** Default: "translate" */
    readonly operation?: "translate";

    /** The input text to translate */
    readonly text?: string;

    /**
     * The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLanguages"}
     */
    readonly translateTo?: string;

    /** Default: {} */
    readonly options?: { from?: string, platform?: string, translateMode?: string };

}
