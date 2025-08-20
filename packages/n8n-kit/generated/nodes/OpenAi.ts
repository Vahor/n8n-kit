// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/OpenAi/OpenAi.node.ts' node

export const name = "openAi" as const;
export const description = "Consume Open AI" as const;
export const version = 1.1 as const;
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


}

