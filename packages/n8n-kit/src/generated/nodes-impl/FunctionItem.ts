// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FunctionItemNodeParameters } from "../nodes/FunctionItem";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FunctionItemProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FunctionItemNodeParameters;
}

/**
 * Run custom function code which gets executed once per item
 */
export class FunctionItem<L extends string, C extends IContext = never, P extends FunctionItemProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.functionItem" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
