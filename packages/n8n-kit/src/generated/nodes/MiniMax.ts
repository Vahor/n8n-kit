// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Interact with MiniMax AI models" as const;
export const type = "@n8n/n8n-nodes-langchain.minimax" as const;
export const version = 1 as const;
export const credentials = [{"name":"minimaxApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface MiniMaxNodeParameters {
    /** Default: "text" */
    readonly resource?: "audio" | "image" | "text" | "video";

    /** Default: "textToSpeech" */
    readonly operation?: "textToSpeech" | "generate" | "message" | "textToVideo" | "imageToVideo";

    /**
     * The speech synthesis model to use
     * Default: "speech-2.8-hd"
     */
    readonly modelId?: "speech-02-hd" | "speech-02-turbo" | "speech-2.6-hd" | "speech-2.6-turbo" | "speech-2.8-hd" | "speech-2.8-turbo" | "image-01" | "MiniMax-M2" | "MiniMax-M2.1" | "MiniMax-M2.1-highspeed" | "MiniMax-M2.5" | "MiniMax-M2.5-highspeed" | "MiniMax-M2.7" | "MiniMax-M2.7-highspeed" | "MiniMax-Hailuo-2.3" | "MiniMax-Hailuo-02" | "T2V-01-Director" | "T2V-01" | "I2V-01" | "I2V-01-Director" | "I2V-01-live" | "MiniMax-Hailuo-02" | "MiniMax-Hailuo-2.3" | "MiniMax-Hailuo-2.3-Fast";

    /**
     * The text to convert to speech (max 10,000 characters)
     * Type options: {"rows":4}
     */
    readonly text?: string;

    /**
     * Voice ID to use for speech synthesis. Browse available voices in the <a href="https://platform.minimax.io/docs/faq/system-voice-id">MiniMax documentation</a>.
     * Default: "English_Graceful_Lady"
     */
    readonly voiceId?: string;

    /**
     * Whether to download the generated audio as binary data. When disabled, only the audio URL is returned.
     * Default: true
     */
    readonly downloadAudio?: boolean;

    /** Default: {} */
    readonly options?: { audioFormat?: "mp3" | "pcm" | "flac" | "wav", emotion?: "angry" | "calm" | "disgusted" | "fearful" | "happy" | "sad" | "surprised", languageBoost?: "Arabic" | "auto" | "Chinese" | "English" | "French" | "German" | "Indonesian" | "Italian" | "Japanese" | "Korean" | "Portuguese" | "Russian" | "Spanish" | "Thai" | "Turkish" | "Vietnamese", pitch?: number, speed?: number, volume?: number } | { promptOptimizer?: boolean, seed?: number } | { hideThinking?: boolean, maxTokens?: number, maxToolsIterations?: number, temperature?: number, topP?: number, system?: string } | { promptOptimizer?: boolean } | { promptOptimizer?: boolean, lastFrameInputType?: "none" | "url" | "binary", lastFrameImageUrl?: string, lastFrameBinaryPropertyName?: string, subjectReferenceInputType?: "none" | "url" | "binary", subjectReferenceImageUrl?: string, subjectReferenceBinaryPropertyName?: string };

    /**
     * Text description of the image to generate (max 1500 characters)
     * Type options: {"rows":4}
     */
    readonly prompt?: string;

    /**
     * Aspect ratio of the generated image
     * Default: "1:1"
     */
    readonly aspectRatio?: "1:1" | "16:9" | "2:3" | "21:9" | "3:2" | "3:4" | "4:3" | "9:16";

    /**
     * Number of images to generate per request (1-9)
     * Default: 1
     * Type options: {"minValue":1,"maxValue":9}
     */
    readonly numberOfImages?: number;

    /**
     * Whether to download the generated image as binary data. When disabled, only the image URL is returned.
     * Default: true
     */
    readonly downloadImage?: boolean;

    /**
     * Default: {"values":[{"content":"","role":"user"}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { values: Array<{ content?: string, role?: "user" | "assistant" }> };

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /**
     * Duration of the generated video
     * Default: 6
     */
    readonly duration?: 6 | 10;

    /**
     * Resolution of the generated video. Available options depend on the model.
     * Default: "768P"
     */
    readonly resolution?: "720P" | "768P" | "1080P" | "512P" | "720P" | "768P" | "1080P";

    /**
     * Whether to download the generated video as binary data. When disabled, only the video URL is returned.
     * Default: true
     */
    readonly downloadVideo?: boolean;

    /**
     * How to provide the first frame image
     * Default: "url"
     */
    readonly imageInputType?: "url" | "binary";

    /** Public URL of the image to use as first frame (JPG, JPEG, PNG, WebP, <20MB) */
    readonly imageUrl?: string;

    /**
     * Default: "data"
     * Type options: {"binaryDataProperty":true}
     */
    readonly binaryPropertyName?: string;

}
