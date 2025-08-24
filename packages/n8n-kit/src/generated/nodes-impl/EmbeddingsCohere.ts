// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsCohereNodeParameters } from "../nodes/EmbeddingsCohere";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmbeddingsCohereProps extends NodeProps {
    readonly parameters: EmbeddingsCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;
}

/**
 * Use Cohere Embeddings
 */
export class EmbeddingsCohere<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsCohereProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.cohereApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
