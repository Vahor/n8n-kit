// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SwitchV1NodeParameters } from "../nodes/SwitchV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SwitchV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SwitchV1NodeParameters;
}

/**
 * Route items depending on defined expression or rules
 */
export class SwitchV1<L extends string, C extends IContext = never, P extends SwitchV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.switch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
