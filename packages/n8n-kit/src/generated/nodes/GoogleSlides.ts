// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Slides/GoogleSlides.node.ts' node

export const description = "Consume the Google Slides API" as const;
export const type = "n8n-nodes-base.googleSlides" as const;
export const version = 2 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleSlidesOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleSlidesNodeParameters {
    /**
     * Default: "serviceAccount"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "presentation"
     */
    readonly resource?: "page" | "presentation";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getSlides" | "replaceText" | "get" | "getThumbnail";

    /**
     * Title of the presentation to create
     */
    readonly title?: string;

    /**
     * ID of the presentation to retrieve. Found in the presentation URL: <code>https://docs.google.com/presentation/d/PRESENTATION_ID/edit</code>
     */
    readonly presentationId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * ID of the page object to retrieve
     */
    readonly pageObjectId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly textUi?: { "textValues": any };

    /**
     * Default: {}
     */
    readonly options?: { "revisionId"?: string };

    /**
     * Name of the binary property to which to write the data of the read page
     */
    readonly download?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryProperty?: string;

}
