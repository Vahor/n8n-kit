// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecutionDataNodeParameters } from "../nodes/ExecutionData";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ExecutionDataProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ExecutionDataNodeParameters;
}

/**
 * Add execution data for search
 */
export class ExecutionData<L extends string, C extends IContext = never, P extends ExecutionDataProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.executionData" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
