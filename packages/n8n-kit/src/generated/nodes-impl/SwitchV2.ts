// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { SwitchV2NodeParameters } from "../nodes/SwitchV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface SwitchV2Props extends NodeProps {
    readonly parameters: SwitchV2NodeParameters;
}

/**
 * Route items depending on defined expression or rules
 */
export class SwitchV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.switch" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: SwitchV2Props) {
        super(id, props);
    }

    public to(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
    }

}
