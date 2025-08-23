// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/CloudNaturalLanguage/GoogleCloudNaturalLanguage.node.ts' node

export const name = "googleCloudNaturalLanguage" as const;
export const description = "Consume Google Cloud Natural Language API" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleCloudNaturalLanguageOAuth2Api","required":true}] as const;

/**
 * Consume Google Cloud Natural Language API
 */
export interface GoogleCloudNaturalLanguageNodeParameters {

    /**
     * Default: "document"
     */
    readonly resource?: "document";

    /**
     * Default: "analyzeSentiment"
     */
    readonly operation?: "analyzeSentiment";

    /**
     * The source of the document: a string containing the content or a Google Cloud Storage URI
     * Default: "content"
     */
    readonly source?: "content" | "gcsContentUri";

    /**
     * The content of the input in string format. Cloud audit logging exempt since it is based on user data.
     */
    readonly content?: string;

    /**
     * The Google Cloud Storage URI where the file content is located. This URI must be of the form: <code>gs://bucket_name/object_name</code>. For more details, see <a href="https://cloud.google.com/storage/docs/reference-uris.">reference</a>.
     */
    readonly gcsContentUri?: string;

    /**
     * Default: {}
     */
    readonly options?: { "documentType"?: "HTML" | "PLAIN_TEXT", "encodingType"?: "NONE" | "UTF8" | "UTF16" | "UTF32", "language"?: "ar" | "zh" | "zh-Hant" | "nl" | "en" | "fr" | "de" | "id" | "it" | "ja" | "ko" | "pt" | "es" | "th" | "tr" | "vi" };


}

