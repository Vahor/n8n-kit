// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SortNodeParameters } from "../nodes/Sort";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SortProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SortNodeParameters;
}

/**
 * Change items order
 */
export class Sort<L extends string, C extends IContext = never, P extends SortProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.sort" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
