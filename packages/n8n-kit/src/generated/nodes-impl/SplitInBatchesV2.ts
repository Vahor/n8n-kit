// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SplitInBatchesV2NodeParameters } from "../nodes/SplitInBatchesV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SplitInBatchesV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SplitInBatchesV2NodeParameters;
}

/**
 * Split data into batches and iterate over each batch
 */
export class SplitInBatchesV2<L extends string, C extends IContext = never, P extends SplitInBatchesV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.splitInBatches" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
