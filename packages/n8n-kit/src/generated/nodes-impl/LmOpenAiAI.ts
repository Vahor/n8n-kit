// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { LmOpenAiAINodeParameters } from "../nodes/LmOpenAiAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmOpenAiAIProps extends NodeProps, LmOpenAiAINodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class LmOpenAiAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmOpenAiAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmOpenAiAINodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}
