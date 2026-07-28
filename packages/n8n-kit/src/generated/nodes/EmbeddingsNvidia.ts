// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsNvidia/EmbeddingsNvidia.node.ts' node

export const description = "Use NVIDIA NeMo Retriever embedding models from build.nvidia.com or a self-hosted NIM" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsNvidia" as const;
export const version = 1 as const;
export const credentials = [{"name":"nvidiaApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsNvidiaNodeParameters {
    /**
     * The NeMo Retriever embedding model. Choose from the list, or specify an ID for a self-hosted NIM. input_type is set automatically (passage when indexing, query when searching). <a href="https://build.nvidia.com/models">Learn more</a>.
     * Default: {"mode":"list","value":"nvidia/llama-3.2-nv-embedqa-1b-v2"}
     */
    readonly model?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { batchSize?: number, stripNewLines?: boolean, dimensions?: number, timeout?: number };

}
