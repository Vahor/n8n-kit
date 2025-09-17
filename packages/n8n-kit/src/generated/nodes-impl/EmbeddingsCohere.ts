// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsCohereNodeParameters } from "../nodes/EmbeddingsCohere";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsCohereProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;
}

/**
 * Use Cohere Embeddings
 */
export class EmbeddingsCohere<L extends string, C extends IContext = never, P extends EmbeddingsCohereProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.cohereApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
