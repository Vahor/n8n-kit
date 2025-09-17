// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { IfV1NodeParameters } from "../nodes/IfV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface IfV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: IfV1NodeParameters;
}

/**
 * Route items to different branches (true/false)
 */
export class IfV1<L extends string, C extends IContext = never, P extends IfV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.if" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
