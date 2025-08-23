// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatOpenAiAINodeParameters } from "../nodes/LmChatOpenAiAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatOpenAiAIProps extends NodeProps, LmChatOpenAiAINodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class LmChatOpenAiAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatOpenAi" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props: LmChatOpenAiAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatOpenAiAINodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}

