// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolSerpApi/ToolSerpApi.node.ts' node

export const description = "Search in Google using SerpAPI" as const;
export const type = "@n8n/n8n-nodes-langchain.toolSerpApi" as const;
export const version = 1 as const;
export const credentials = [{"name":"serpApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolSerpApiNodeParameters {
    /** Default: {} */
    readonly options?: { gl?: string, device?: "desktop" | "mobile" | "tablet", no_cache?: boolean, google_domain?: string, hl?: string };

}
