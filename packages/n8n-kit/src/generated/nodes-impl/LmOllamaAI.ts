// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { LmOllamaAINodeParameters } from "../nodes/LmOllamaAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmOllamaAIProps extends NodeProps, LmOllamaAINodeParameters {

    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;

}

export class LmOllamaAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmOllamaAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmOllamaAINodeParameters, "ollamaApiCredentials"> {

        const { ollamaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ollamaApiCredentials];

    }


}
