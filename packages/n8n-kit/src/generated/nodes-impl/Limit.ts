// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { LimitNodeParameters } from "../nodes/Limit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LimitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LimitNodeParameters;
}

/**
 * Restrict the number of items
 */
export class Limit<L extends string, C extends IContext = never, P extends LimitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.limit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
