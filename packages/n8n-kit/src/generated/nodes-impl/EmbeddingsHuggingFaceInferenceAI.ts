// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsHuggingFaceInferenceAINodeParameters } from "../nodes/EmbeddingsHuggingFaceInferenceAI";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsHuggingFaceInferenceAIProps extends NodeProps, EmbeddingsHuggingFaceInferenceAINodeParameters {

    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;

}

export class EmbeddingsHuggingFaceInferenceAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsHuggingFaceInferenceAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsHuggingFaceInferenceAINodeParameters, "huggingFaceApiCredentials"> {

        const { huggingFaceApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.huggingFaceApiCredentials];

    }


}
