// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Interact with Google Gemini AI models" as const;
export const type = "@n8n/n8n-nodes-langchain.googleGemini" as const;
export const version = 1 as const;
export const credentials = [{"name":"googlePalmApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleGeminiNodeParameters {
    /** Default: "text" */
    readonly resource?: "audio" | "document" | "file" | "image" | "text" | "video";

    /** Default: "transcribe" */
    readonly operation?: "analyze" | "transcribe" | "analyze" | "upload" | "analyze" | "generate" | "message" | "analyze" | "generate" | "download";

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
    readonly options?: { maxOutputTokens?: number } | { startTime?: string, endTime?: string } | { sampleCount?: number, binaryPropertyOutput?: string } | { systemMessage?: string, codeExecution?: boolean, frequencyPenalty?: number, maxOutputTokens?: number, candidateCount?: number, presencePenalty?: number, temperature?: number, topP?: number, topK?: number, maxToolsIterations?: number } | { binaryPropertyOutput?: string } | { sampleCount?: number, durationSeconds?: number, aspectRatio?: "16:9" | "9:16", personGeneration?: "dont_allow" | "allow_adult" | "allow_all", binaryPropertyOutput?: string };

    /** URL(s) of the document(s) to analyze, multiple URLs can be added separated by comma */
    readonly documentUrls?: string;

    /** URL of the file to upload */
    readonly fileUrl?: string;

    /** URL(s) of the image(s) to analyze, multiple URLs can be added separated by comma */
    readonly imageUrls?: string;

    /**
     * A text description of the desired image(s)
     * Type options: {"rows":2}
     */
    readonly prompt?: string;

    /**
     * Default: {"values":[{"content":""}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { values: Array<{ content?: string, role?: "user" | "model" }> };

    /** Whether to attempt to return the response in JSON format */
    readonly jsonOutput?: boolean;

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
