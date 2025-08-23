// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Brandfetch/Brandfetch.node.ts' node

export const description = "Consume Brandfetch API" as const;
export const type = "n8n-nodes-base.Brandfetch" as const;
export const version = 1 as const;
export const credentials = [{"name":"brandfetchApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BrandfetchNodeParameters {
    /**
     * Default: "logo"
     */
    readonly operation?: "color" | "company" | "font" | "industry" | "logo";

    /**
     * The domain name of the company
     */
    readonly domain?: string;

    /**
     * Name of the binary property to which to write the data of the read file
     */
    readonly download?: boolean;

    /**
     * Default: ["logo","icon"]
     */
    readonly imageTypes?: ("icon" | "logo")[];

    /**
     * The image format in which the logo should be returned as
     * Default: ["png"]
     */
    readonly imageFormats?: ("png" | "svg")[];

}
