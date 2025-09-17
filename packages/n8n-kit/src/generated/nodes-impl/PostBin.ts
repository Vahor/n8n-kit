// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { PostBinNodeParameters } from "../nodes/PostBin";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PostBinProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PostBinNodeParameters;
}

/**
 * Consume PostBin API
 */
export class PostBin<L extends string, C extends IContext = never, P extends PostBinProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.postBin" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
