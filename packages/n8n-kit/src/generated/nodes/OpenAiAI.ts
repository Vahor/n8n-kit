// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const name = "openAi" as const;
export const description = "Message an assistant or GPT, analyze images, generate audio, etc." as const;
export const version = 1.8 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;

/**
 * Message an assistant or GPT, analyze images, generate audio, etc.
 */
export interface OpenAiAINodeParameters {

    /**
     * Default: "text"
     */
    readonly resource?: "assistant" | "text" | "image" | "audio" | "file";

    /**
     * Default: "message"
     */
    readonly operation?: "create" | "deleteAssistant" | "list" | "message" | "update" | "generate" | "transcribe" | "translate" | "deleteFile" | "list" | "upload" | "analyze" | "generate" | "message" | "classify";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly modelId?: any;

    /**
     * The name of the assistant. The maximum length is 256 characters.
     */
    readonly name?: string;

    /**
     * The description of the assistant. The maximum length is 512 characters.
     */
    readonly description?: string;

    /**
     * The system instructions that the assistant uses. The maximum length is 32768 characters.
     * Type options: {"rows":2}
     */
    readonly instructions?: string;

    /**
     * Whether to enable the code interpreter that allows the assistants to write and run Python code in a sandboxed execution environment, find more <a href="https://platform.openai.com/docs/assistants/tools/code-interpreter" target="_blank">here</a>
     */
    readonly codeInterpreter?: boolean;

    /**
     * Whether to augments the assistant with knowledge from outside its model, such as proprietary product information or documents, find more <a href="https://platform.openai.com/docs/assistants/tools/knowledge-retrieval" target="_blank">here</a>
     */
    readonly knowledgeRetrieval?: boolean;

    /**
     * The files to be used by the assistant, there can be a maximum of 20 files attached to the assistant. You can use expression to pass file IDs as an array or comma-separated string.
     * Default: []
     * Type options: {"loadOptionsMethod":"getFiles"}
     */
    readonly file_ids?: any[];

    /**
     */
    readonly noticeTools?: string;

    /**
     * Default: {}
     */
    readonly options?: { "temperature"?: number, "topP"?: number, "failIfExists"?: boolean } | { "baseURL"?: string, "maxRetries"?: number, "timeout"?: number, "preserveOriginalTools"?: boolean } | { "codeInterpreter"?: boolean, "description"?: string, "file_ids"?: any[], "instructions"?: string, "knowledgeRetrieval"?: boolean, "modelId"?: any, "name"?: string, "removeCustomTools"?: boolean, "temperature"?: number, "topP"?: number } | { "response_format"?: "mp3" | "opus" | "aac" | "flac", "speed"?: number, "binaryPropertyOutput"?: string } | { "language"?: string, "temperature"?: number } | { "temperature"?: number } | { "purpose"?: "assistants" | "fine-tune" } | { "purpose"?: "any" | "assistants" | "fine-tune" } | { "n"?: number, "dalleQuality"?: "hd" | "standard", "quality"?: "high" | "medium" | "low", "size"?: "256x256" | "512x512" | "1024x1024" | "1024x1024" | "1792x1024" | "1024x1792" | "1024x1024" | "1024x1536" | "1536x1024", "style"?: "natural" | "vivid", "returnImageUrls"?: boolean, "binaryPropertyOutput"?: string } | { "detail"?: "auto" | "low" | "high", "maxTokens"?: number } | { "useStableModel"?: boolean } | { "frequency_penalty"?: number, "maxTokens"?: number, "n"?: number, "presence_penalty"?: number, "temperature"?: number, "topP"?: number, "reasoning_effort"?: "low" | "medium" | "high", "maxToolsIterations"?: number };

    /**
     * Assistant to respond to the message. You can add, modify or remove assistants in the <a href="https://platform.openai.com/playground?mode=assistant" target="_blank">playground</a>.
     * Default: {"mode":"list","value":""}
     */
    readonly assistantId?: any;

    /**
     * Default: "auto"
     */
    readonly prompt?: "auto" | "define" | string;

    /**
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /**
     * Default: "connector"
     */
    readonly memory?: "connector" | "threadId";

    /**
     * The ID of the thread to continue, a new thread will be created if not specified
     */
    readonly threadId?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /**
     * Default: " "
     */
    readonly fileSizeLimitNotice?: string;

    /**
     * Default: "tts-1"
     */
    readonly model?: "tts-1" | "tts-1-hd" | "dall-e-2" | "dall-e-3" | "gpt-image-1";

    /**
     * The text to generate audio for. The maximum length is 4096 characters.
     * Type options: {"rows":2}
     */
    readonly input?: string;

    /**
     * The voice to use when generating the audio
     * Default: "alloy"
     */
    readonly voice?: "alloy" | "echo" | "fable" | "nova" | "onyx" | "shimmer";

    /**
     * Name of the binary property which contains the audio file in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly fileId?: any;

    /**
     * Default: "url"
     */
    readonly inputType?: "url" | "base64";

    /**
     * URL(s) of the image(s) to analyze, multiple URLs can be added separated by comma
     */
    readonly imageUrls?: string;

    /**
     * Default: {"values":[{"content":""}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { "values": any };

    /**
     * Whether to attempt to return the response in JSON format. Compatible with GPT-4 Turbo and all GPT-3.5 Turbo models newer than gpt-3.5-turbo-1106.
     */
    readonly jsonOutput?: boolean;

    /**
     * Default: "hide"
     */
    readonly hideTools?: any;


}

