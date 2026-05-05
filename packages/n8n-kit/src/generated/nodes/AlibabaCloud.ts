// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Interact with Alibaba Cloud Qwen models via Model Studio" as const;
export const type = "@n8n/n8n-nodes-langchain.alibabaCloud" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"alibabaCloudApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface AlibabaCloudNodeParameters {
    /** Default: "text" */
    readonly resource?: "text" | "image" | "video";

    /** Default: "message" */
    readonly operation?: "message" | "analyze" | "generate" | "textToVideo" | "imageToVideo";

    /**
     * The model to use for generation
     * Default: "qwen3.5-flash"
     */
    readonly modelId?: "qwen3-max" | "qwen3-max-2026-01-23" | "qwen3.5-122b-a10b" | "qwen3.5-27b" | "qwen3.5-35b-a3b" | "qwen3.5-397b-a17b" | "qwen3.5-flash" | "qwen3.5-flash-2026-02-23" | "qwen3.5-plus" | "qwen3.5-plus-2026-02-15" | {
	value: string,
	mode: "list" | "id",
} | "qwen3-vl-flash" | "qwen3-vl-plus" | "qwen-image" | "qwen-image-max" | "qwen-image-plus" | "wan2.6-t2i" | "z-image-turbo" | "wan2.6-t2v" | "wan2.6-i2v-flash" | "wan2.6-i2v";

    /**
     * Default: {"messageValues":[{"content":"","role":"user"}]}
     * Type options: {"multipleValues":true}
     */
    readonly messages?: { messageValues: Array<{ content?: string, role?: "user" | "assistant" }> };

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly options?: { enableSearch?: boolean, maxTokens?: number, maxToolsIterations?: number, repetitionPenalty?: number, seed?: number, stop?: string, system?: string, temperature?: number, topK?: number, topP?: number };

    /**
     * How to provide the image for analysis
     * Default: "url"
     */
    readonly inputType?: "url" | "binary";

    /** The URL of the image to analyze */
    readonly imageUrl?: string;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /**
     * The question or instruction about the image
     * Type options: {"rows":4}
     */
    readonly question?: string;

    /** Default: {} */
    readonly visionOptions?: { temperature?: number, maxTokens?: number };

    /**
     * The text prompt describing the image to generate
     * Type options: {"rows":4}
     */
    readonly prompt?: string;

    /**
     * Whether to download the generated image as binary data. When disabled, only the image URL is returned.
     * Default: true
     */
    readonly downloadImage?: boolean;

    /** Default: {} */
    readonly imageOptions?: { size?: "1024*1024" | "720*1280" | "1280*720" | "1104*1472" | "1328*1328" | "1472*1104" | "1664*928" | "928*1664", promptExtend?: boolean };

    /**
     * Resolution tier of the generated video
     * Default: "1080P"
     */
    readonly resolution?: "720P" | "1080P";

    /**
     * Duration of the generated video in seconds (2–15)
     * Default: 5
     * Type options: {"minValue":2,"maxValue":15}
     */
    readonly duration?: number;

    /**
     * Whether to generate a single-shot or multi-shot narrative video
     * Default: "single"
     */
    readonly shotType?: "single" | "multi";

    /**
     * Whether to download the generated video as binary data. When disabled, only the video URL is returned.
     * Default: true
     */
    readonly downloadVideo?: boolean;

    /** Default: {} */
    readonly videoOptions?: { promptExtend?: boolean, audio?: boolean, audioInputType?: "url" | "binary", audioUrl?: string, audioBinaryPropertyName?: string };

    /** The URL of the first-frame image to generate video from */
    readonly imgUrl?: string;

    /** Default: {} */
    readonly imageToVideoOptions?: { promptExtend?: boolean, audio?: boolean, audioInputType?: "url" | "binary", audioUrl?: string, audioBinaryPropertyName?: string };

}
