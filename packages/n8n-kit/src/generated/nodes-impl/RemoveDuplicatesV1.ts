// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { RemoveDuplicatesV1NodeParameters } from "../nodes/RemoveDuplicatesV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RemoveDuplicatesV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RemoveDuplicatesV1NodeParameters;
}

/**
 * Delete items with matching field values
 */
export class RemoveDuplicatesV1<L extends string, C extends IContext = never, P extends RemoveDuplicatesV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.removeDuplicates" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
