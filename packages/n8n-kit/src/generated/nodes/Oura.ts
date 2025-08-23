// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Oura/Oura.node.ts' node

export const description = "Consume Oura API" as const;
export const type = "n8n-nodes-base.oura" as const;
export const version = 1 as const;
export const credentials = [{"name":"ouraApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OuraNodeParameters {
    /**
     * Default: "summary"
     */
    readonly resource?: "profile" | "summary";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getActivity" | "getReadiness" | "getSleep";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "end"?: string, "start"?: string };

}
