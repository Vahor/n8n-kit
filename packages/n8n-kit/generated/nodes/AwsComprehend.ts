// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Aws/Comprehend/AwsComprehend.node.js' node

export const name = "awsComprehend" as const;
export const description = "Sends data to Amazon Comprehend" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS Comprehend"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Sends data to Amazon Comprehend
 */
export interface AwsComprehendNodeParameters {

    /**
     * The resource to perform
     * Default: "text"
     */
    readonly resource?: "text";

    /**
     * Default: "detectDominantLanguage"
     */
    readonly operation?: "detectDominantLanguage" | "detectEntities" | "detectSentiment";

    /**
     * The language code for text
     * Default: "en"
     */
    readonly languageCode?: "ar" | "zh" | "zh-TW" | "en" | "fr" | "de" | "hi" | "it" | "ja" | "ko" | "pt" | "es";

    /**
     * The text to send
     */
    readonly text?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "endpointArn"?: string };


}

