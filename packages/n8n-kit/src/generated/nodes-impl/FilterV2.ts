// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FilterV2NodeParameters } from "../nodes/FilterV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FilterV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FilterV2NodeParameters;
}

/**
 * Remove items matching a condition
 */
export class FilterV2<L extends string, C extends IContext = never, P extends FilterV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.filter" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
