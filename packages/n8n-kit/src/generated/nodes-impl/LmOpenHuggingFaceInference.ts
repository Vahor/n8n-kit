// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HuggingFaceApiCredentials } from "../credentials/HuggingFaceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmOpenHuggingFaceInferenceNodeParameters } from "../nodes/LmOpenHuggingFaceInference";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmOpenHuggingFaceInferenceProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmOpenHuggingFaceInferenceNodeParameters;
    readonly huggingFaceApiCredentials: Credentials<HuggingFaceApiCredentials>;
}

/**
 * Language Model HuggingFaceInference
 */
export class LmOpenHuggingFaceInference<L extends string, C extends IContext = never, P extends LmOpenHuggingFaceInferenceProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.huggingFaceApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
