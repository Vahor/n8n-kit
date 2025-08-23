// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsOllamaAINodeParameters } from "../nodes/EmbeddingsOllamaAI";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsOllamaAIProps extends NodeProps, EmbeddingsOllamaAINodeParameters {

    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;

}

export class EmbeddingsOllamaAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsOllamaAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsOllamaAINodeParameters, "ollamaApiCredentials"> {

        const { ollamaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ollamaApiCredentials];

    }


}

