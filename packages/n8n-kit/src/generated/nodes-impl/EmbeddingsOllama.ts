// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsOllamaNodeParameters } from "../nodes/EmbeddingsOllama";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsOllamaProps extends NodeProps, EmbeddingsOllamaNodeParameters {

    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;

}

export class EmbeddingsOllama<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsOllamaProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsOllamaNodeParameters, "ollamaApiCredentials"> {

        const { ollamaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ollamaApiCredentials];

    }


}
