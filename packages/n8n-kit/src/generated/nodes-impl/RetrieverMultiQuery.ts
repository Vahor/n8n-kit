// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { RetrieverMultiQueryNodeParameters } from "../nodes/RetrieverMultiQuery";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RetrieverMultiQueryProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RetrieverMultiQueryNodeParameters;
}

/**
 * Automates prompt tuning, generates diverse queries and expands document pool for enhanced retrieval.
 */
export class RetrieverMultiQuery<L extends string, C extends IContext = never, P extends RetrieverMultiQueryProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.retrieverMultiQuery" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withModel(next: State): this {
        super.addNext(next.startState, { type: "ai_languageModel", direction: "input" });
        return this;
    }

    public withRetriever(next: State): this {
        super.addNext(next.startState, { type: "ai_retriever", direction: "input" });
        return this;
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toRetriever(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_retriever" });
        return this;
    }

}
