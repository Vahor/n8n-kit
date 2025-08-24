// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { SentimentAnalysisNodeParameters } from "../nodes/SentimentAnalysis";
import { Node, type NodeProps } from "../../nodes/node";

export interface SentimentAnalysisProps extends NodeProps {
    readonly parameters: SentimentAnalysisNodeParameters;
}

/**
 * Analyze the sentiment of your text
 */
export class SentimentAnalysis<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.sentimentAnalysis" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: SentimentAnalysisProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public with(next: State): this {
        super.addNext(next.startState, { type: "main", direction: "input" });
        return this;
    }

    public withModel(next: State): this {
        super.addNext(next.startState, { type: "ai_languageModel", direction: "input" });
        return this;
    }

    public toCustom(next: IChainable): this {
        super.addNext(next.startState, { type: "custom" });
        return this;
    }

}
