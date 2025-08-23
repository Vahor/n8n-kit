// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolSearXng/ToolSearXng.node.ts' node

export const description = "Search in SearXNG" as const;
export const type = "@n8n/n8n-nodes-langchain.toolSearXng" as const;
export const version = 1 as const;
export const credentials = [{"name":"searXngApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolSearXngNodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "numResults"?: number, "pageNumber"?: number, "language"?: string, "safesearch"?: "0" | "1" | "2" };

}
