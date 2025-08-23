// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ReadPdf/ReadPDF.node.ts' node

export const description = "Reads a PDF and extracts its content" as const;
export const type = "n8n-nodes-base.readPDF" as const;
export const version = 1 as const;

/**
 * Reads a PDF and extracts its content
 */
export interface ReadPDFNodeParameters {

    /**
     * Name of the binary property from which to read the PDF file
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    readonly encrypted?: boolean;

    /**
     * Password to decrypt the PDF file with
     * Type options: {"password":true}
     */
    readonly password?: string;


}

