// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ApiTemplateIo/ApiTemplateIo.node.ts' node

export const description = "Consume the APITemplate.io API" as const;
export const type = "n8n-nodes-base.apiTemplateIo" as const;
export const version = 1 as const;
export const credentials = [{"name":"apiTemplateIoApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface ApiTemplateIoNodeParameters {

    /**
     * Default: "image"
     */
    readonly resource?: "account" | "image" | "pdf";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get";

    /**
     * ID of the image template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getImageTemplates"}
     */
    readonly imageTemplateId?: string;

    /**
     * ID of the PDF template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getPdfTemplates"}
     */
    readonly pdfTemplateId?: string;

    readonly jsonParameters?: boolean;

    /**
     * Name of the binary property to which to write the data of the read file
     */
    readonly download?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryProperty?: string;

    readonly overridesJson?: string;

    readonly propertiesJson?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly overridesUi?: { "overrideValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly propertiesUi?: { "propertyValues": any };

    /**
     * Default: {}
     */
    readonly options?: { "fileName"?: string };


}

