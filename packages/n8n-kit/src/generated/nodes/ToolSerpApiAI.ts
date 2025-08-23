// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolSerpApi/ToolSerpApi.node.ts' node

export const name = "toolSerpApi" as const;
export const description = "Search in Google using SerpAPI" as const;
export const version = 1 as const;
export const credentials = [{"name":"serpApi","required":true}] as const;

/**
 * Search in Google using SerpAPI
 */
export interface ToolSerpApiAINodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "gl"?: string, "device"?: "desktop" | "mobile" | "tablet", "no_cache"?: boolean, "google_domain"?: string, "hl"?: string };


}

