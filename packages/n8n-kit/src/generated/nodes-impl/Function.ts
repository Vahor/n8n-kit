// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FunctionNodeParameters } from "../nodes/Function";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FunctionProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FunctionNodeParameters;
}

/**
 * Run custom function code which gets executed once and allows you to add, remove, change and replace items
 */
export class Function<L extends string, C extends IContext = never, P extends FunctionProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.function" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
