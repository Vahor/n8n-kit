// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Netlify/Netlify.node.ts' node

export const description = "Consume Netlify API" as const;
export const type = "n8n-nodes-base.netlify" as const;
export const version = 1 as const;
export const credentials = [{"name":"netlifyApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NetlifyNodeParameters {
    /**
     * Default: "deploy"
     */
    readonly resource?: "deploy" | "site";

    /**
     * Default: "getAll"
     */
    readonly operation?: "cancel" | "create" | "get" | "getAll" | "delete" | "get" | "getAll";

    /**
     * Enter the Site ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSites"}
     */
    readonly siteId?: string;

    readonly deployId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":200}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "branch"?: string, "title"?: string };

}
