// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SplitOutNodeParameters } from "../nodes/SplitOut";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SplitOutProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SplitOutNodeParameters;
}

/**
 * Turn a list inside item(s) into separate items
 */
export class SplitOut<L extends string, C extends IContext = never, P extends SplitOutProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.splitOut" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
