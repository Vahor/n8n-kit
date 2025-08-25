// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/OpenAi/OpenAi.node.ts' node

export const description = "Consume Open AI" as const;
export const type = "n8n-nodes-base.openAi" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OpenAiNodeParameters {
    /** Default: "text" */
    readonly resource?: "chat" | "image" | "text";

    /** Default: "complete" */
    readonly operation?: "complete" | "create" | "complete" | "edit" | "moderate";

    /**
     * The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
     * Default: "gpt-3.5-turbo"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.id.startsWith('gpt-') && !$responseItem.id.startsWith('gpt-4-vision') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string | "code-davinci-edit-001" | "text-davinci-edit-001" | "text-moderation-stable" | "text-moderation-latest";

    /**
     * The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
     * Default: "gpt-3.5-turbo"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.id.startsWith('gpt-') && !$responseItem.id.startsWith('gpt-4-vision') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly chatModel?: string;

    /**
     * Default: {}
     * Type options: {"sortable":true,"multipleValues":true}
     */
    readonly prompt?: { messages: { role?: "assistant" | "system" | "user", content?: string } } | string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplifyOutput?: boolean;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { echo?: boolean, frequency_penalty?: number, maxTokens?: number, n?: number, presence_penalty?: number, temperature?: number, topP?: number } | { n?: number, quality?: "hd" | "standard", size?: "256x256" | "512x512" | "1024x1024" | "1024x1024" | "1792x1024" | "1024x1792", style?: "natural" | "vivid" };

    /**
     * The model to use for image generation
     * Default: "dall-e-2"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.id.startsWith('dall-') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly imageModel?: string;

    /**
     * The format in which to return the image(s)
     * Default: "binaryData"
     */
    readonly responseFormat?: "binaryData" | "imageUrl";

    /** The input text to be edited */
    readonly input?: string;

    /** The instruction that tells the model how to edit the input text */
    readonly instruction?: string;

}
