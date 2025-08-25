// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { InformationExtractorNodeParameters } from "../nodes/InformationExtractor";
import { Node, type NodeProps } from "../../nodes/node";

export interface InformationExtractorProps extends NodeProps {
    readonly parameters: InformationExtractorNodeParameters;
}

/**
 * Extract information from text in a structured format
 */
export class InformationExtractor<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.informationExtractor" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: InformationExtractorProps) {
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
