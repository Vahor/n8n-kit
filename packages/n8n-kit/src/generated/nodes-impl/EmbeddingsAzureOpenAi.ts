// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureOpenAiApiCredentials } from "../credentials/AzureOpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsAzureOpenAiNodeParameters } from "../nodes/EmbeddingsAzureOpenAi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsAzureOpenAiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsAzureOpenAiNodeParameters;
    readonly azureOpenAiApiCredentials: Credentials<AzureOpenAiApiCredentials>;
}

/**
 * Use Embeddings Azure OpenAI
 */
export class EmbeddingsAzureOpenAi<L extends string, C extends IContext = never, P extends EmbeddingsAzureOpenAiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.azureOpenAiApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
