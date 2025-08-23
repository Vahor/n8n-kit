// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cloudflare/Cloudflare.node.ts' node

export const description = "Consume Cloudflare API" as const;
export const type = "n8n-nodes-base.cloudflare" as const;
export const version = 1 as const;
export const credentials = [{"name":"cloudflareApi","required":true}] as const;

/**
 * Consume Cloudflare API
 */
export interface CloudflareNodeParameters {

    /**
     * Default: "zoneCertificate"
     */
    readonly resource?: "zoneCertificate";

    /**
     * Default: "upload"
     */
    readonly operation?: "delete" | "get" | "getMany" | "upload";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getZones"}
     */
    readonly zoneId?: string;

    /**
     * The zone's leaf certificate
     */
    readonly certificate?: string;

    readonly privateKey?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 25
     * Type options: {"minValue":1,"maxValue":50}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "status"?: "active" | "expired" | "deleted" | "pending" };

    readonly certificateId?: string;


}

