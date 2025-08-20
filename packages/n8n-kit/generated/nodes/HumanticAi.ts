// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/HumanticAI/HumanticAi.node.ts' node

export const name = "humanticAi" as const;
export const description = "Consume Humantic AI API" as const;
export const version = 1 as const;
export const defaults = {"name":"Humantic AI"} as const;
export const credentials = [{"name":"humanticAiApi","required":true}] as const

/**
 * Consume Humantic AI API
 */
export interface HumanticAiNodeParameters {

    /**
     * Default: "profile"
     */
    readonly resource?: "profile";


}

