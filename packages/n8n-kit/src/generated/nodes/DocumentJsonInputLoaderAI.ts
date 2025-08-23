// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentJSONInputLoader/DocumentJsonInputLoader.node.ts' node

export const name = "documentJsonInputLoader" as const;
export const description = "Use JSON data from a previous step in the workflow" as const;
export const version = 1 as const;

/**
 * Use JSON data from a previous step in the workflow
 */
export interface DocumentJsonInputLoaderAINodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title"
     */
    readonly pointers?: string;

    /**
     * Default: {}
     */
    readonly options?: { "metadata"?: { "metadataValues": any } };


}

