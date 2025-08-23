// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { TextClassifierNodeParameters } from "../nodes/TextClassifier";
import { Node, type NodeProps } from "../../nodes";

export interface TextClassifierProps extends NodeProps {
    readonly parameters: TextClassifierNodeParameters;
}

/**
 * Classify your text into distinct categories
 */
export class TextClassifier<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.textClassifier" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: TextClassifierProps) {
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

}
