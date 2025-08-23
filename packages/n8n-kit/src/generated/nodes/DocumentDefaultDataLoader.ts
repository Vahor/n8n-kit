// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentDefaultDataLoader/DocumentDefaultDataLoader.node.ts' node

export const description = "Load data from previous step in the workflow" as const;
export const type = "@n8n/n8n-nodes-langchain.documentDefaultDataLoader" as const;
export const version = 1.1 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"ai_document":"ai_document"} as const;

export interface DocumentDefaultDataLoaderNodeParameters {
    readonly notice?: string;

    /**
     * Default: "json"
     */
    readonly dataType?: "json" | "binary";

    /**
     * Default: "allInputData"
     */
    readonly jsonMode?: "allInputData" | "expressionData";

    /**
     * Default: "allInputData"
     */
    readonly binaryMode?: "allInputData" | "specificField";

    /**
     * Default: "auto"
     */
    readonly loader?: "auto" | "csvLoader" | "docxLoader" | "epubLoader" | "jsonLoader" | "pdfLoader" | "textLoader";

    /**
     * Drag and drop fields from the input pane, or use an expression
     * Type options: {"rows":6}
     */
    readonly jsonData?: string;

    /**
     * The name of the field in the agent or chain’s input that contains the binary file to be processed
     * Default: "data"
     */
    readonly binaryDataKey?: string;

    /**
     * Default: "simple"
     */
    readonly textSplittingMode?: "simple" | "custom";

    /**
     * Default: {}
     */
    readonly options?: { "pointers"?: string, "separator"?: string, "column"?: string, "splitPages"?: boolean, "metadata"?: { "metadataValues": any } };

}
