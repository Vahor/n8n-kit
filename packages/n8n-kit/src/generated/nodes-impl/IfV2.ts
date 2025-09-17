// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { IfV2NodeParameters } from "../nodes/IfV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface IfV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: IfV2NodeParameters;
}

/**
 * Route items to different branches (true/false)
 */
export class IfV2<L extends string, C extends IContext = never, P extends IfV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.if" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
