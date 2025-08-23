// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { EmbeddingsOllamaNodeParameters } from "../nodes/EmbeddingsOllama";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsOllamaProps extends NodeProps {
    readonly parameters: EmbeddingsOllamaNodeParameters;
    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;
}

/**
 * Use Ollama Embeddings
 */
export class EmbeddingsOllama<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsOllamaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.ollamaApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
