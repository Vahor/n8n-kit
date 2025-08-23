// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureOpenAiApiCredentials } from "../credentials/AzureOpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsAzureOpenAiAINodeParameters } from "../nodes/EmbeddingsAzureOpenAiAI";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsAzureOpenAiAIProps extends NodeProps, EmbeddingsAzureOpenAiAINodeParameters {

    readonly azureOpenAiApiCredentials: Credentials<AzureOpenAiApiCredentials>;

}

export class EmbeddingsAzureOpenAiAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsAzureOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsAzureOpenAiAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsAzureOpenAiAINodeParameters, "azureOpenAiApiCredentials"> {

        const { azureOpenAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.azureOpenAiApiCredentials];

    }


}
