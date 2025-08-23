// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolWolframAlpha/ToolWolframAlpha.node.ts' node

export const description = "Connects to WolframAlpha's computational intelligence engine." as const;
export const type = "@n8n/n8n-nodes-langchain.toolWolframAlpha" as const;
export const version = 1 as const;
export const credentials = [{"name":"wolframAlphaApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolWolframAlphaNodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

}
