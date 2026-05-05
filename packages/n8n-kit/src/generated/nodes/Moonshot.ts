// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Interact with Moonshot Kimi AI models" as const;
export const type = "@n8n/n8n-nodes-langchain.moonshot" as const;
export const version = 1 as const;
export const credentials = [{"name":"moonshotApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface MoonshotNodeParameters {
    /** Default: "text" */
    readonly resource?: "image" | "text";

    /** Default: "analyze" */
    readonly operation?: "analyze" | "message";

    /** Default: {"mode":"list","value":""} */
    readonly modelId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Default: "What's in this image?"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /**
     * Name of the binary field(s) which contains the image(s), separate multiple field names with commas
     * Default: "data"
     * Type options: {"binaryDataProperty":true}
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly options?: { maxTokens?: number } | { frequencyPenalty?: number, includeMergedResponse?: boolean, maxTokens?: number, maxToolsIterations?: number, temperature?: number, topP?: number, presencePenalty?: number, responseFormat?: "text" | "json_object", system?: string, thinkingMode?: boolean, webSearch?: boolean };

    /**
     * Default: {"values":[{"content":"","role":"user"}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { values: Array<{ content?: string, role?: "user" | "assistant" }> };

    /** Whether to add image attachments to the message */
    readonly addAttachments?: boolean;

}
