// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/UrlScanIo/UrlScanIo.node.ts' node

export const name = "urlScanIo" as const;
export const description = "Provides various utilities for monitoring websites like health checks or screenshots" as const;
export const version = 1 as const;
export const defaults = {"name":"urlscan.io"} as const;
export const credentials = [{"name":"urlScanIoApi","required":true}] as const

/**
 * Provides various utilities for monitoring websites like health checks or screenshots
 */
export interface UrlScanIoNodeParameters {

    /**
     * Default: "scan"
     */
    readonly resource?: "scan";


}

