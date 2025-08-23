// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatOllamaAINodeParameters } from "../nodes/LmChatOllamaAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatOllamaAIProps extends NodeProps, LmChatOllamaAINodeParameters {

    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;

}

export class LmChatOllamaAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatOllamaAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatOllamaAINodeParameters, "ollamaApiCredentials"> {

        const { ollamaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ollamaApiCredentials];

    }


}
