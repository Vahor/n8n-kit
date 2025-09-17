// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { RerankerCohereNodeParameters } from "../nodes/RerankerCohere";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RerankerCohereProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RerankerCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;
}

/**
 * Use Cohere Reranker to reorder documents after retrieval from a vector store by relevance to the given query.
 */
export class RerankerCohere<L extends string, C extends IContext = never, P extends RerankerCohereProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.rerankerCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.cohereApiCredentials];
    }

    public toAiReranker(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_reranker" });
        return this;
    }

}
