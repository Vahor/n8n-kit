// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatMinimax/LmChatMinimax.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatMinimax" as const;
export const version = 1 as const;
export const credentials = [{"name":"minimaxApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatMinimaxNodeParameters {
    /**
     * The model which will generate the completion. <a href="https://platform.minimax.io/docs/api-reference/text-openai-api">Learn more</a>.
     * Default: "MiniMax-M2.7"
     */
    readonly model?: "MiniMax-M2" | "MiniMax-M2.1" | "MiniMax-M2.1-highspeed" | "MiniMax-M2.5" | "MiniMax-M2.5-highspeed" | "MiniMax-M2.7" | "MiniMax-M2.7-highspeed";

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { hideThinking?: boolean, maxTokens?: number, temperature?: number, timeout?: number, maxRetries?: number, topP?: number };

}
