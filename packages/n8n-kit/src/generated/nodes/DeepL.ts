// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/DeepL/DeepL.node.ts' node

export const description = "Translate data using DeepL" as const;
export const type = "n8n-nodes-base.deepL" as const;
export const version = 1 as const;
export const credentials = [{"name":"deepLApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DeepLNodeParameters {
    /**
     * Default: "language"
     */
    readonly resource?: "language";

    /**
     * Default: "translate"
     */
    readonly operation?: "translate";

    /**
     * Input text to translate
     */
    readonly text?: string;

    /**
     * Language to translate to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLanguages"}
     */
    readonly translateTo?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "sourceLang"?: string, "splitSentences"?: "nonewlines" | "0" | "1", "preserveFormatting"?: "0" | "1", "formality"?: "more" | "less" | "default" };

}
