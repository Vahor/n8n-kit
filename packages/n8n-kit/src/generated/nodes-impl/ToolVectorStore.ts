// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { ToolVectorStoreNodeParameters } from "../nodes/ToolVectorStore";
import { Node, type NodeProps } from "../../nodes";

export interface ToolVectorStoreProps extends NodeProps {
    readonly parameters: ToolVectorStoreNodeParameters;
}

/**
 * Answer questions with a vector store
 */
export class ToolVectorStore<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolVectorStore" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ToolVectorStoreProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withVectorStore(next: State): this {
        super.addNext(next.startState, { type: "ai_vectorStore", direction: "input" });
        return this;
    }

    public withModel(next: State): this {
        super.addNext(next.startState, { type: "ai_languageModel", direction: "input" });
        return this;
    }

    public aiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
