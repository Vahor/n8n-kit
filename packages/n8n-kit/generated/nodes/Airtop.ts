// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Airtop/Airtop.node.ts' node

export const name = "airtop" as const;
export const description = "Scrape and control any site with Airtop" as const;
export const version = 1 as const;

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
     * The name of the Airtop profile to load or create
     */
    readonly profileName?: string | string | string;

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
    readonly proxyConfig?: { "country"?: "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BQ" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "CV" | "KH" | "CM" | "CA" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR" | "CI" | "HR" | "CU" | "CW" | "CY" | "CZ" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MK" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "RE" | "RO" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "UM" | "US" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW", "sticky"?: boolean };

    /**
     * The URL of the proxy to use
     */
    readonly proxyUrl?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "solveCaptcha"?: boolean, "extensionIds"?: string } | { "timeout"?: number } | { "waitUntil"?: "load" | "domContentLoaded" | "complete" | "noWait" } | { "includeNavigationBar"?: boolean, "screenResolution"?: string, "disableResize"?: boolean } | { "waitUntil"?: "complete" | "domContentLoaded" | "load" | "noWait" } | { "outputSchema"?: string, "parseJsonOutput"?: boolean, "interactionMode"?: "auto" | "accurate" | "cost-efficient", "paginationMode"?: "auto" | "paginated" | "infinite-scroll" } | { "outputSchema"?: string, "parseJsonOutput"?: boolean, "includeVisualAnalysis"?: boolean } | { "visualScope"?: "auto" | "viewport" | "page" | "scan", "waitForNavigation"?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" };

    /**
     * Default: "This operation will save the profile on session termination"
     */
    readonly notice?: string;

    /**
     * The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank">Session</a> to use
     * Default: "={{ $json[\"sessionId\"] }}"
     */
    readonly sessionId?: string | string | string | string | string | string | string | string;

    /**
     * The ID of the <a href="https://docs.airtop.ai/guides/how-to/creating-a-session#windows" target="_blank">Window</a> to use
     * Default: "={{ $json[\"windowId\"] }}"
     */
    readonly windowId?: string | string | string | string | string;

    /**
     * Initial URL to load in the window. Defaults to https://www.google.com.
     */
    readonly url?: string | string | string | string;

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
    readonly fileId?: string | string | string;

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
     * Optional description of the file input to interact with
     */
    readonly elementDescription?: string | string | string | string | string;

    /**
     * Whether to include hidden elements in the interaction
     * Default: true
     */
    readonly includeHiddenElements?: boolean | boolean;

    /**
     * Name for the file to upload. For a session, all files loaded should have <b>unique names</b>.
     */
    readonly fileName?: string;

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
     * Whether to automatically trigger the file input dialog in the current window. If disabled, the file will only be uploaded to the session without opening the file input dialog.
     * Default: true
     */
    readonly triggerFileInputParameter?: boolean;

    /**
     * Choose between creating a new session or using an existing one
     * Default: "existing"
     */
    readonly sessionMode?: "new" | "existing";

    /**
     * Whether to terminate the session after the operation is complete. When disabled, you must manually terminate the session. By default, idle sessions timeout after 10 minutes
     * Default: true
     */
    readonly autoTerminateSession?: boolean;

    /**
     * The prompt to extract data from the pages
     * Type options: {"rows":4}
     */
    readonly prompt?: string | string;

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

