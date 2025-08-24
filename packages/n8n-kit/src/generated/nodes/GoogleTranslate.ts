// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Translate/GoogleTranslate.node.ts' node

export const description = "Translate data using Google Translate" as const;
export const type = "n8n-nodes-base.googleTranslate" as const;
export const version = 2 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleTranslateOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleTranslateNodeParameters {
    /** Default: "serviceAccount" */
    readonly authentication?: "serviceAccount" | "oAuth2" | "oAuth2" | "serviceAccount";

    /** Default: "language" */
    readonly resource?: "language";

    /** Default: "translate" */
    readonly operation?: "translate";

    /** The input text to translate */
    readonly text?: string;

    /**
     * The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLanguages"}
     */
    readonly translateTo?: string;

}
