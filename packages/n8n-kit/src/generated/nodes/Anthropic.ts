// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const name = "anthropic" as const;
export const description = "Interact with Anthropic AI models" as const;
export const version = 1 as const;
export const credentials = [{"name":"anthropicApi","required":true}] as const;

/**
 * Interact with Anthropic AI models
 */
export interface AnthropicNodeParameters {

    /**
     * Default: "text"
     */
    readonly resource?: "document" | "file" | "image" | "prompt" | "text";

    /**
     * Default: "analyze"
     */
    readonly operation?: "analyze" | "upload" | "get" | "list" | "deleteFile" | "generate" | "improve" | "templatize" | "message";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly modelId?: any;

    /**
     * Default: "What's in this document?"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /**
     * Default: "url"
     */
    readonly inputType?: "url" | "binary";

    /**
     * URL(s) of the document(s) to analyze, multiple URLs can be added separated by comma
     */
    readonly documentUrls?: string;

    /**
     * Name of the binary field(s) which contains the document(s), seperate multiple field names with commas
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether to simplify the response or not
     * Default: true
     */
    readonly simplify?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "maxTokens"?: number } | { "fileName"?: string } | { "system"?: string, "feedback"?: string } | { "system"?: string } | { "includeMergedResponse"?: boolean, "system"?: string, "codeExecution"?: boolean, "webSearch"?: boolean, "maxUses"?: number, "allowedDomains"?: string, "blockedDomains"?: string, "maxTokens"?: number, "temperature"?: number, "topP"?: number, "topK"?: number, "maxToolsIterations"?: number };

    /**
     * ID of the file to delete
     */
    readonly fileId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * URL of the file to upload
     */
    readonly fileUrl?: string;

    /**
     * URL(s) of the image(s) to analyze, multiple URLs can be added separated by comma
     */
    readonly imageUrls?: string;

    /**
     */
    readonly experimentalNotice?: string;

    /**
     * Description of the prompt's purpose
     * Type options: {"rows":2}
     */
    readonly task?: string;

    /**
     * Messages that constitute the prompt to be improved
     * Default: {"values":[{"content":"","role":"user"}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { "values": any };

    /**
     * Whether to add attachments to the message
     */
    readonly addAttachments?: boolean;

    /**
     * The type of input to use for the attachments
     * Default: "url"
     */
    readonly attachmentsInputType?: "url" | "binary";

    /**
     * URL(s) of the file(s) to attach, multiple URLs can be added separated by comma
     */
    readonly attachmentsUrls?: string;


}

