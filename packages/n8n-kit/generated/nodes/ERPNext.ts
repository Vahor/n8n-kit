// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ERPNext/ERPNext.node.ts' node

export const name = "erpNext" as const;
export const description = "Consume ERPNext API" as const;
export const version = 1 as const;
export const defaults = {"name":"ERPNext"} as const;
export const credentials = [{"name":"erpNextApi","required":true}] as const

/**
 * Consume ERPNext API
 */
export interface ERPNextNodeParameters {

    /**
     * Default: "document"
     */
    readonly resource?: "document";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * DocType whose documents to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDocTypes"}
     */
    readonly docType?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: string[], "filters"?: { "customProperty": any } };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly properties?: { "customProperty": any };

    /**
     * The name (ID) of document you would like to get
     */
    readonly documentName?: string;


}

