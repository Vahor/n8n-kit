// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatMistralCloud/LmChatMistralCloud.node.ts' node

export const name = "lmChatMistralCloud" as const;
export const description = "For advanced usage with an AI chain" as const;
export const version = 1 as const;
export const credentials = [{"name":"mistralCloudApi","required":true}] as const;

/**
 * For advanced usage with an AI chain
 */
export interface LmChatMistralCloudNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the completion. <a href="https://docs.mistral.ai/platform/endpoints/">Learn more</a>.
     * Default: "mistral-small"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ !$responseItem.id.includes('embed') }}"}},{"type":"setKeyValue","properties":{"name":"={{ $responseItem.id }}","value":"={{ $responseItem.id }}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxTokens"?: number, "temperature"?: number, "maxRetries"?: number, "topP"?: number, "safeMode"?: boolean, "randomSeed"?: number };


}

