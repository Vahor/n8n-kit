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
     * Whether to automatically save the <a href="https://docs.airtop.ai/guides/how-to/saving-a-profile" target="_blank">Airtop profile</a> for this session upon termination
     */
    readonly saveProfileOnTermination?: boolean;

    /**
     * Minutes to wait before the session is terminated due to inactivity
     * Default: 10
     */
    readonly timeoutMinutes?: number;

    /**
     * Choose how to configure the proxy for this session
     * Default: "none"
     */
    readonly proxy?: "none" | "integrated" | "proxyUrl";

    /**
     * The Airtop-provided configuration to use for the proxy
     * Default: {"country":"US","sticky":true}
     */
    readonly proxyConfig?: { "country"?: string, "sticky"?: boolean };

    /**
     * The URL of the proxy to use
     */
    readonly proxyUrl?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "solveCaptcha"?: boolean, "extensionIds"?: string, "timeout"?: number, "waitUntil"?: "load" | "domContentLoaded" | "complete" | "noWait", "includeNavigationBar"?: boolean, "screenResolution"?: string, "disableResize"?: boolean, "undefined"?: any, "interactionMode"?: "auto" | "accurate" | "cost-efficient", "paginationMode"?: "auto" | "paginated" | "infinite-scroll", "includeVisualAnalysis"?: boolean, "visualScope"?: "auto" | "viewport" | "page" | "scan", "waitForNavigation"?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" };

    /**
     * Default: "This operation will save the profile on session termination"
     */
    readonly notice?: string;

    /**
     * Whether to get the URL of the window's <a href="https://docs.airtop.ai/guides/how-to/creating-a-live-view" target="_blank">Live View</a>
     */
    readonly getLiveView?: boolean;

    /**
     * Whether to include the navigation bar in the Live View. When enabled, the navigation bar will be visible allowing you to navigate between pages.
     */
    readonly includeNavigationBar?: boolean;

    /**
     * The screen resolution of the Live View. Setting a resolution will force the window to open at that specific size.
     */
    readonly screenResolution?: string;

    /**
     * Whether to disable the window from being resized in the Live View
     */
    readonly disableResize?: boolean;

    /**
     * Whether to output the image as a binary file instead of a base64 encoded string
     */
    readonly outputImageAsBinary?: boolean;

    /**
     * ID of the file to delete
     */
    readonly fileId?: string;

    /**
     * Whether to output the file in binary format if the file is ready for download
     */
    readonly outputBinaryFile?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Comma-separated list of <a href="https://docs.airtop.ai/api-reference/airtop-api/sessions/create" target="_blank">Session IDs</a> to filter files by. When empty, all files from all sessions will be returned.
     */
    readonly sessionIds?: string;

    /**
     * Whether to output one item containing all files or output each file as a separate item
     * Default: true
     */
    readonly outputSingleItem?: boolean;

    /**
     * Name for the file to upload. For a session, all files loaded should have <b>unique names</b>.
     */
    readonly fileName: string;

    /**
     * Choose the type of file to upload. Defaults to 'Customer Upload'.
     * Default: "customer_upload"
     */
    readonly fileType?: "browser_download" | "screenshot" | "video" | "customer_upload";

    /**
     * Source of the file to upload
     * Default: "url"
     */
    readonly source?: "url" | "binary";

    /**
     * Name of the binary property containing the file data
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * URL from where to fetch the file to upload
     */
    readonly url?: string;

    /**
     * Whether to automatically trigger the file input dialog in the current window. If disabled, the file will only be uploaded to the session without opening the file input dialog.
     * Default: true
     */
    readonly triggerFileInputParameter?: boolean;

    /**
     * The prompt to extract data from the pages
     * Type options: {"rows":4}
     */
    readonly prompt?: string;

    /**
     * The information to fill into the form written in natural language
     * Type options: {"rows":4}
     */
    readonly formData?: string;

    /**
     * Choose the mode of scrolling
     * Default: "automatic"
     */
    readonly scrollingMode?: "automatic" | "manual";

    /**
     * A natural language description of the element to scroll to
     */
    readonly scrollToElement?: string;

    /**
     * The direction to scroll to. When 'Scroll By' is defined, 'Scroll To Edge' action will be executed first, then 'Scroll By' action.
     * Default: {}
     */
    readonly scrollToEdge?: { "edgeValues": any };

    /**
     * The amount to scroll by. When 'Scroll To Edge' is defined, 'Scroll By' action will be executed after 'Scroll To Edge'.
     * Default: {}
     */
    readonly scrollBy?: { "scrollValues": any };

    /**
     * Scroll within an element on the page
     */
    readonly scrollWithin?: string;

    /**
     * The text to type into the browser window
     */
    readonly text?: string;

    /**
     * Whether to press the Enter key after typing the text
     */
    readonly pressEnterKey?: boolean;


}

