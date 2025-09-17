// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { NoOpNodeParameters } from "../nodes/NoOp";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NoOpProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NoOpNodeParameters;
}

/**
 * No Operation
 */
export class NoOp<L extends string, C extends IContext = never, P extends NoOpProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.noOp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
