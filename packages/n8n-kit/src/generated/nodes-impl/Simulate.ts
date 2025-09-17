// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SimulateNodeParameters } from "../nodes/Simulate";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SimulateProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SimulateNodeParameters;
}

/**
 * Simulate a node
 */
export class Simulate<L extends string, C extends IContext = never, P extends SimulateProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.simulate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
