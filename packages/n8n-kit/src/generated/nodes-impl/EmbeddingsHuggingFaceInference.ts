// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsHuggingFaceInferenceNodeParameters } from "../nodes/EmbeddingsHuggingFaceInference";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsHuggingFaceInferenceProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsHuggingFaceInferenceNodeParameters;
    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;
}

/**
 * Use HuggingFace Inference Embeddings
 */
export class EmbeddingsHuggingFaceInference<L extends string, C extends IContext = never, P extends EmbeddingsHuggingFaceInferenceProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.huggingFaceApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
