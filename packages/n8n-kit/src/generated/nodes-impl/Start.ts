// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { StartNodeParameters } from "../nodes/Start";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StartProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StartNodeParameters;
}

/**
 * Starts the workflow execution from this node
 */
export class Start<L extends string, C extends IContext = never, P extends StartProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.start" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
