// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { SwitchV2NodeParameters } from "../nodes/SwitchV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SwitchV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SwitchV2NodeParameters;
}

/**
 * Route items depending on defined expression or rules
 */
export class SwitchV2<L extends string, C extends IContext = never, P extends SwitchV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.switch" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: IChainable): this {
        super.addNext(next.startState, { type });
        return this;
    }

}
