// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/Translate/GoogleTranslate.node.js' node

export const name = "googleTranslate" as const;
export const description = "Translate data using Google Translate" as const;
export const version = 2 as const;
export const defaults = {"name":"Google Translate"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleTranslateOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Translate data using Google Translate
 */
export interface GoogleTranslateNodeParameters {

    /**
     * Default: "serviceAccount"
     */
    readonly authentication?: "serviceAccount" | "oAuth2" | "oAuth2";

    /**
     * Default: "language"
     */
    readonly resource?: "language";

    /**
     * Default: "translate"
     */
    readonly operation?: "translate";

    /**
     * The input text to translate
     */
    readonly text?: string;

    /**
     * The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLanguages"}
     */
    readonly translateTo?: string;


}

