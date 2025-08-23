// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/OneSimpleApi/OneSimpleApi.node.ts' node

export const description = "A toolbox of no-code utilities" as const;
export const type = "n8n-nodes-base.oneSimpleApi" as const;
export const version = 1 as const;
export const credentials = [{"name":"oneSimpleApi","required":true}] as const;

/**
 * A toolbox of no-code utilities
 */
export interface OneSimpleApiNodeParameters {

    /**
     * Default: "website"
     */
    readonly resource?: "information" | "socialProfile" | "utility" | "website";

    /**
     * Default: "pdf"
     */
    readonly operation?: "pdf" | "seo" | "screenshot" | "instagramProfile" | "spotifyArtistProfile" | "exchangeRate" | "imageMetadata" | "expandURL" | "qrCode" | "validateEmail";

    /**
     * Link to webpage to convert
     */
    readonly link?: string;

    /**
     * Whether to download the PDF or return a link to it
     */
    readonly download?: boolean;

    /**
     * The name of the output field to put the binary file data in
     * Default: "data"
     */
    readonly output?: string;

    /**
     * Default: {}
     */
    readonly options?: { "page"?: "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "Ledger" | "Legal" | "Letter" | "Tabloid", "force"?: boolean } | { "size"?: "Small" | "Medium" | "Large", "format"?: "PNG" | "SVG" } | { "screen"?: "phone" | "phone-landscape" | "retina" | "tablet" | "tablet-landscape", "force"?: boolean, "fullpage"?: boolean } | { "headers"?: boolean };

    /**
     * The text that should be turned into a QR code - like a website URL
     */
    readonly message?: string;

    /**
     * Profile name to get details of
     */
    readonly profileName?: string;

    /**
     * Artist name to get details for
     */
    readonly artistName?: string;

    /**
     * Value to convert
     */
    readonly value?: string;

    readonly fromCurrency?: string;

    readonly toCurrency?: string;

    readonly emailAddress?: string;


}

