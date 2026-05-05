// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { TimeSavedNodeParameters } from "../nodes/TimeSaved";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TimeSavedProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TimeSavedNodeParameters;
}

/**
 * Dynamically track time saved based on the workflow’s execution path and the number of items processed
 */
export class TimeSaved<L extends string, C extends IContext = never, P extends TimeSavedProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.timeSaved" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
