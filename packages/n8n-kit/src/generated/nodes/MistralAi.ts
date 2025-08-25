// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MistralAI/MistralAi.node.ts' node

export const description = "Consume Mistral AI API" as const;
export const type = "n8n-nodes-base.mistralAi" as const;
export const version = 1 as const;
export const credentials = [{"name":"mistralCloudApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MistralAiNodeParameters {
    /** Default: "document" */
    readonly resource?: "document";

    /** Default: "extractText" */
    readonly operation?: "extractText";

    /**
     * The OCR model to use
     * Default: "mistral-ocr-latest"
     */
    readonly model?: "mistral-ocr-latest";

    /**
     * The type of document to process
     * Default: "document_url"
     */
    readonly documentType?: "document_url" | "image_url";

    /**
     * How the document will be provided
     * Default: "binary"
     */
    readonly inputType?: "binary" | "url";

    /**
     * Name of the input binary field that contains the file to process
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /** URL of the document or image to process */
    readonly url?: string;

    /** Default: {} */
    readonly options?: { batch?: boolean, batchSize: number, deleteFiles?: boolean };

}
