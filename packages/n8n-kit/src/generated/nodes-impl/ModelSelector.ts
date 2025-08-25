// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { ModelSelectorNodeParameters } from "../nodes/ModelSelector";
import { Node, type NodeProps } from "../../nodes/node";

export interface ModelSelectorProps extends NodeProps {
    readonly parameters: ModelSelectorNodeParameters;
}

/**
 * Use this node to select one of the connected models to this node based on workflow data
 */
export class ModelSelector<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.modelSelector" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ModelSelectorProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
