// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/OpenAi/OpenAi.node.js' node

export const name = "openAi" as const;
export const description = "Consume Open AI" as const;
export const version = 1 as const;
export const defaults = {"name":"OpenAI"} as const;
export const credentials = [{"name":"openAiApi","required":true}] as const

/**
 * Consume Open AI
 */
export interface OpenAiNodeParameters {

    /**
     * Default: "text"
     */
    readonly resource?: "chat" | "image" | "text";

    /**
     * Default: "complete"
     */
    readonly operation?: "complete" | "create" | "edit" | "moderate";

    /**
     * The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
     * Default: "gpt-3.5-turbo"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.id.startsWith('gpt-') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Default: {}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly prompt?: { "messages": any };

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplifyOutput?: boolean;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "echo"?: boolean, "frequency_penalty"?: number, "maxTokens"?: number, "n"?: number, "presence_penalty"?: number, "temperature"?: number, "topP"?: number, "size"?: "256x256" | "512x512" | "1024x1024" };

    /**
     * The format in which to return the image(s)
     * Default: "binaryData"
     */
    readonly responseFormat?: "binaryData" | "imageUrl";

    /**
     * The input text to be edited
     */
    readonly input?: string;

    /**
     * The instruction that tells the model how to edit the input text
     */
    readonly instruction?: string;


}

