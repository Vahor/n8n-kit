// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecuteWorkflowNodeParameters } from "../nodes/ExecuteWorkflow";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ExecuteWorkflowProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ExecuteWorkflowNodeParameters;
}

/**
 * Execute another workflow
 */
export class ExecuteWorkflow<L extends string, C extends IContext = never, P extends ExecuteWorkflowProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.executeWorkflow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
