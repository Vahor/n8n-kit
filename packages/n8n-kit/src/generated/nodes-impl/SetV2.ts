// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SetV2NodeParameters } from "../nodes/SetV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SetV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SetV2NodeParameters;
}

/**
 * Modify, add, or remove item fields
 */
export class SetV2<L extends string, C extends IContext = never, P extends SetV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.set" as const;
    protected typeVersion = 3.4 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
