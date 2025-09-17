// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DebugHelperNodeParameters } from "../nodes/DebugHelper";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DebugHelperProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DebugHelperNodeParameters;
}

/**
 * Causes problems intentionally and generates useful data for debugging
 */
export class DebugHelper<L extends string, C extends IContext = never, P extends DebugHelperProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.debugHelper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
