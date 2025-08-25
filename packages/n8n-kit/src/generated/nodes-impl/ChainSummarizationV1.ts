// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { ChainSummarizationV1NodeParameters } from "../nodes/ChainSummarizationV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface ChainSummarizationV1Props extends NodeProps {
    readonly parameters: ChainSummarizationV1NodeParameters;
}

/**
 * Transforms text into a concise summary
 */
export class ChainSummarizationV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.chainSummarization" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ChainSummarizationV1Props) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withModel(next: State): this {
        super.addNext(next.startState, { type: "ai_languageModel", direction: "input" });
        return this;
    }

    public withDocument(next: State): this {
        super.addNext(next.startState, { type: "ai_document", direction: "input" });
        return this;
    }

}
