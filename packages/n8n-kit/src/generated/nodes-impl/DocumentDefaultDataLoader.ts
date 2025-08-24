// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { DocumentDefaultDataLoaderNodeParameters } from "../nodes/DocumentDefaultDataLoader";
import { Node, type NodeProps } from "../../nodes/node";

export interface DocumentDefaultDataLoaderProps extends NodeProps {
    readonly parameters: DocumentDefaultDataLoaderNodeParameters;
}

/**
 * Load data from previous step in the workflow
 */
export class DocumentDefaultDataLoader<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.documentDefaultDataLoader" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: DocumentDefaultDataLoaderProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toAiDocument(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_document" });
        return this;
    }

}
