// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { MergeV3NodeParameters } from "../nodes/MergeV3";
import { Node, type NodeProps } from "../../nodes/node";

export interface MergeV3Props extends NodeProps {
    readonly parameters: MergeV3NodeParameters;
}

/**
 * Merges data of multiple streams once data from both is available
 */
export class MergeV3<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.merge" as const;
    protected typeVersion = 3.2 as const;

    constructor(id: L, override props?: MergeV3Props) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
