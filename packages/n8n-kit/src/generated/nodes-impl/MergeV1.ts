// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MergeV1NodeParameters } from "../nodes/MergeV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MergeV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MergeV1NodeParameters;
}

/**
 * Merges data of multiple streams once data from both is available
 */
export class MergeV1<L extends string, C extends IContext = never, P extends MergeV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.merge" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
