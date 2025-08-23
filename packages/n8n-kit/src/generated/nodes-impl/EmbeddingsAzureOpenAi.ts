// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureOpenAiApiCredentials } from "../credentials/AzureOpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsAzureOpenAiNodeParameters } from "../nodes/EmbeddingsAzureOpenAi";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsAzureOpenAiProps extends NodeProps, EmbeddingsAzureOpenAiNodeParameters {

    readonly azureOpenAiApiCredentials: Credentials<AzureOpenAiApiCredentials>;

}

export class EmbeddingsAzureOpenAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsAzureOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsAzureOpenAiProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsAzureOpenAiNodeParameters, "azureOpenAiApiCredentials"> {

        const { azureOpenAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.azureOpenAiApiCredentials];

    }


}
