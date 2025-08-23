// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureOpenAiApiCredentials } from "../credentials/AzureOpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsAzureOpenAiNodeParameters } from "../nodes/EmbeddingsAzureOpenAi";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsAzureOpenAiProps extends NodeProps {

    readonly parameters: EmbeddingsAzureOpenAiNodeParameters;
    readonly azureOpenAiApiCredentials: Credentials<AzureOpenAiApiCredentials>;

}

/**
 * Use Embeddings Azure OpenAI
 */
export class EmbeddingsAzureOpenAi<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsAzureOpenAiProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.azureOpenAiApiCredentials];

    }


}
