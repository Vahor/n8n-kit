// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { LmOpenHuggingFaceInferenceNodeParameters } from "../nodes/LmOpenHuggingFaceInference";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmOpenHuggingFaceInferenceProps extends NodeProps {
    readonly parameters: LmOpenHuggingFaceInferenceNodeParameters;
    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;
}

/**
 * Language Model HuggingFaceInference
 */
export class LmOpenHuggingFaceInference<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmOpenHuggingFaceInferenceProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.huggingFaceApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
