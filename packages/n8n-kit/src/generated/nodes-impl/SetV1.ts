// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SetV1NodeParameters } from "../nodes/SetV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SetV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SetV1NodeParameters;
}

/**
 * Sets values on items and optionally remove other values
 */
export class SetV1<L extends string, C extends IContext = never, P extends SetV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.set" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
