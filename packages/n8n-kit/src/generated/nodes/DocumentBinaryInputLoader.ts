// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentBinaryInputLoader/DocumentBinaryInputLoader.node.ts' node

export const description = "Use binary data from a previous step in the workflow" as const;
export const type = "@n8n/n8n-nodes-langchain.documentBinaryInputLoader" as const;
export const version = 1 as const;
export const inputs = {"Text Splitter":"ai_textSplitter"} as const;
export const outputs = {"ai_document":"ai_document"} as const;

export interface DocumentBinaryInputLoaderNodeParameters {
    /** Default: "jsonLoader" */
    readonly loader?: "csvLoader" | "docxLoader" | "epubLoader" | "jsonLoader" | "pdfLoader" | "textLoader";

    /**
     * Name of the binary property from which to read the file buffer
     * Default: "data"
     */
    readonly binaryDataKey?: string;

    /** Default: true */
    readonly splitPages?: boolean;

    /** Column to extract from CSV */
    readonly column?: string;

    /**
     * Separator to use for CSV
     * Default: ","
     */
    readonly separator?: string;

    /** Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title" */
    readonly pointers?: string;

    /** Default: {} */
    readonly options?: { metadata?: { metadataValues: Array<{ name: string, value?: string }> } };

}
