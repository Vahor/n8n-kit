// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsHuggingFaceInferenceNodeParameters } from "../nodes/EmbeddingsHuggingFaceInference";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsHuggingFaceInferenceProps extends NodeProps, EmbeddingsHuggingFaceInferenceNodeParameters {

    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;

}

export class EmbeddingsHuggingFaceInference<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsHuggingFaceInferenceProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsHuggingFaceInferenceNodeParameters, "huggingFaceApiCredentials"> {

        const { huggingFaceApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.huggingFaceApiCredentials];

    }


}
