// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Interact with Ollama AI models" as const;
export const type = "@n8n/n8n-nodes-langchain.ollama" as const;
export const version = 1 as const;
export const credentials = [{"name":"ollamaApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface OllamaNodeParameters {
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

    /** Default: "binary" */
    readonly inputType?: "binary" | "url";

    /**
     * Name of the binary field(s) which contains the image(s), separate multiple field names with commas
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /** URL(s) of the image(s) to analyze, multiple URLs can be added separated by comma */
    readonly imageUrls?: string;

    /**
     * Whether to simplify the response or not
     * Default: true
     */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly options?: { system?: string, temperature?: number, top_p?: number, top_k?: number, num_predict?: number, frequency_penalty?: number, presence_penalty?: number, repeat_penalty?: number, num_ctx?: number, repeat_last_n?: number, min_p?: number, seed?: number, stop?: string, keep_alive?: string, low_vram?: boolean, main_gpu?: number, num_batch?: number, num_gpu?: number, num_thread?: number, penalize_newline?: boolean, use_mlock?: boolean, use_mmap?: boolean, vocab_only?: boolean, format?: "" | "json" };

    /**
     * Default: {"values":[{"content":"","role":"user"}]}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly messages?: { values: Array<{ content?: string, role?: "user" | "assistant" }> };

}
