// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Airtop/Airtop.node.ts' node

export const name = "airtop" as const;
export const description = "Scrape and control any site with Airtop" as const;
export const version = 1 as const;
export const defaults = {"name":"Airtop"} as const;
export const credentials = [{"name":"airtopApi","required":true}] as const

/**
 * Scrape and control any site with Airtop
 */
export interface AirtopNodeParameters {

    /**
     * Default: "session"
     */
    readonly resource?: "extraction" | "file" | "interaction" | "session" | "window";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "save" | "terminate" | "waitForDownload" | "close" | "create" | "getLiveView" | "list" | "load" | "takeScreenshot" | "deleteFile" | "get" | "getMany" | "load" | "upload" | "query" | "getPaginated" | "scrape" | "click" | "fill" | "hover" | "scroll" | "type";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "visualScope"?: "auto" | "viewport" | "page" | "scan", "waitForNavigation"?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" };


}

