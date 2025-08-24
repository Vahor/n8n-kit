// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { EmbeddingsHuggingFaceInferenceNodeParameters } from "../nodes/EmbeddingsHuggingFaceInference";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmbeddingsHuggingFaceInferenceProps extends NodeProps {
    readonly parameters: EmbeddingsHuggingFaceInferenceNodeParameters;
    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;
}

/**
 * Use HuggingFace Inference Embeddings
 */
export class EmbeddingsHuggingFaceInference<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsHuggingFaceInferenceProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.huggingFaceApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
