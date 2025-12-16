// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Interact with Google Gemini AI models" as const;
export const type = "@n8n/n8n-nodes-langchain.googleGemini" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"googlePalmApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleGeminiNodeParameters {
    /** Default: "text" */
    readonly resource?: "audio" | "document" | "fileSearch" | "image" | "file" | "text" | "video";

    /** Default: "transcribe" */
    readonly operation?: "analyze" | "transcribe" | "analyze" | "upload" | "createStore" | "deleteStore" | "listStores" | "uploadToStore" | "analyze" | "generate" | "edit" | "message" | "analyze" | "generate" | "download";

    /** Default: {"mode":"list","value":""} */
    readonly modelId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Default: "What's in this audio?"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /** Default: "url" */
    readonly inputType?: "url" | "binary";

    /** URL(s) of the audio(s) to analyze, multiple URLs can be added separated by comma */
    readonly audioUrls?: string;

    /**
     * Name of the binary field(s) which contains the audio(s), seperate multiple field names with commas
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether to simplify the response or not
     * Default: true
     */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly options?: { maxOutputTokens?: number } | { startTime?: string, endTime?: string } | { binaryPropertyOutput?: string } | { sampleCount?: number, binaryPropertyOutput?: string } | { includeMergedResponse?: boolean, systemMessage?: string, codeExecution?: boolean, frequencyPenalty?: number, maxOutputTokens?: number, candidateCount?: number, presencePenalty?: number, temperature?: number, topP?: number, topK?: number, thinkingBudget?: number, maxToolsIterations?: number } | { sampleCount?: number, durationSeconds?: number, aspectRatio?: "16:9" | "9:16", personGeneration?: "dont_allow" | "allow_adult" | "allow_all", binaryPropertyOutput?: string };

    /** URL(s) of the document(s) to analyze, multiple URLs can be added separated by comma */
    readonly documentUrls?: string;

    /** URL of the file to upload */
    readonly fileUrl?: string;

    /** A human-readable name for the File Search store */
    readonly displayName?: string;

    /** The full name of the File Search store to delete (format: fileSearchStores/...) */
    readonly fileSearchStoreName?: string;

    /** Whether to delete related Documents and objects. If false, deletion will fail if the store contains any Documents. */
    readonly force?: boolean;

    /**
     * Maximum number of File Search stores to return per page (max 20)
     * Default: 10
     * Type options: {"minValue":1,"maxValue":20}
     */
    readonly pageSize?: number;

    /** Token from a previous page to retrieve the next page of results */
    readonly pageToken?: string;

    /** URL(s) of the image(s) to analyze, multiple URLs can be added separated by comma */
    readonly imageUrls?: string;

    /**
     * Instruction describing how to edit the image
     * Type options: {"rows":2}
     */
    readonly prompt?: string;

    /**
     * Add one or more binary fields to include images with your prompt
     * Default: {"values":[{"binaryPropertyName":"data"}]}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Image"}
     */
    readonly images?: { values: Array<{ binaryPropertyName?: string }> };

    /**
     * Default: {"values":[{"content":""}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { values: Array<{ content?: string, role?: "user" | "model" }> };

    /** Whether to attempt to return the response in JSON format */
    readonly jsonOutput?: boolean;

    /** Default: {} */
    readonly builtInTools?: { googleSearch?: boolean, googleMaps?: { latitude?: number, longitude?: number }, urlContext?: boolean, fileSearch?: { fileSearchStoreNames: string, metadataFilter?: string }, codeExecution?: boolean };

    /** URL(s) of the video(s) to analyze, multiple URLs can be added separated by comma */
    readonly videoUrls?: string;

    /** The URL from Google Gemini API to download the video from */
    readonly url?: string;

    /**
     * Whether to return the video as a binary file or a URL that can be used to download the video later
     * Default: "video"
     */
    readonly returnAs?: "video" | "url";

}
