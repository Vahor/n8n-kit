// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { LmOpenHuggingFaceInferenceAINodeParameters } from "../nodes/LmOpenHuggingFaceInferenceAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmOpenHuggingFaceInferenceAIProps extends NodeProps, LmOpenHuggingFaceInferenceAINodeParameters {

    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;

}

export class LmOpenHuggingFaceInferenceAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmOpenHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmOpenHuggingFaceInferenceAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmOpenHuggingFaceInferenceAINodeParameters, "huggingFaceApiCredentials"> {

        const { huggingFaceApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.huggingFaceApiCredentials];

    }


}
