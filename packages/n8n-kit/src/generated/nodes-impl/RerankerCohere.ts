// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { RerankerCohereNodeParameters } from "../nodes/RerankerCohere";
import { Node, type NodeProps } from "../../nodes/node";

export interface RerankerCohereProps extends NodeProps {
    readonly parameters: RerankerCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;
}

/**
 * Use Cohere Reranker to reorder documents after retrieval from a vector store by relevance to the given query.
 */
export class RerankerCohere<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.rerankerCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RerankerCohereProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.cohereApiCredentials];
    }

    public toAiReranker(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_reranker" });
        return this;
    }

}
