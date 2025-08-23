// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsOpenAiNodeParameters } from "../nodes/EmbeddingsOpenAi";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsOpenAiProps extends NodeProps, EmbeddingsOpenAiNodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class EmbeddingsOpenAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsOpenAi" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props: EmbeddingsOpenAiProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsOpenAiNodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}
