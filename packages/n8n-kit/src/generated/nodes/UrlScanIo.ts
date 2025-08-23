// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/UrlScanIo/UrlScanIo.node.ts' node

export const description = "Provides various utilities for monitoring websites like health checks or screenshots" as const;
export const type = "n8n-nodes-base.urlScanIo" as const;
export const version = 1 as const;
export const credentials = [{"name":"urlScanIoApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface UrlScanIoNodeParameters {
    /**
     * Default: "scan"
     */
    readonly resource?: "scan";

    /**
     * Default: "perform"
     */
    readonly operation?: "get" | "getAll" | "perform";

    /**
     * ID of the scan to retrieve
     */
    readonly scanId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "query"?: string };

    /**
     * URL to scan
     */
    readonly url?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "customAgent"?: string, "overrideSafety"?: string, "referer"?: string, "tags"?: string, "visibility"?: "private" | "public" | "unlisted" };

}
