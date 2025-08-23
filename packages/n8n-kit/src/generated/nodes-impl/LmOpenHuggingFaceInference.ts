// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { LmOpenHuggingFaceInferenceNodeParameters } from "../nodes/LmOpenHuggingFaceInference";
import { Node, type NodeProps } from "../../nodes";

export interface LmOpenHuggingFaceInferenceProps extends NodeProps, LmOpenHuggingFaceInferenceNodeParameters {

    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;

}

export class LmOpenHuggingFaceInference<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmOpenHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmOpenHuggingFaceInferenceProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmOpenHuggingFaceInferenceNodeParameters, "huggingFaceApiCredentials"> {

        const { huggingFaceApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.huggingFaceApiCredentials];

    }


}
