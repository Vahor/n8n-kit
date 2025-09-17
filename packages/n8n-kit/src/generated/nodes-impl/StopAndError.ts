// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { StopAndErrorNodeParameters } from "../nodes/StopAndError";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StopAndErrorProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StopAndErrorNodeParameters;
}

/**
 * Throw an error in the workflow
 */
export class StopAndError<L extends string, C extends IContext = never, P extends StopAndErrorProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.stopAndError" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
