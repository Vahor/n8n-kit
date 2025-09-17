// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SplitInBatchesV1NodeParameters } from "../nodes/SplitInBatchesV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SplitInBatchesV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SplitInBatchesV1NodeParameters;
}

/**
 * Split data into batches and iterate over each batch
 */
export class SplitInBatchesV1<L extends string, C extends IContext = never, P extends SplitInBatchesV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.splitInBatches" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
