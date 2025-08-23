// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { EmbeddingsCohereNodeParameters } from "../nodes/EmbeddingsCohere";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsCohereProps extends NodeProps {
    readonly parameters: EmbeddingsCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;
}

/**
 * Use Cohere Embeddings
 */
export class EmbeddingsCohere<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsCohereProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.cohereApiCredentials];
    }

    public aiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
