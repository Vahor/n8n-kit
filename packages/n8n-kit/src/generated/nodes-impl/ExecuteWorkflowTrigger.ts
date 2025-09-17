// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecuteWorkflowTriggerNodeParameters } from "../nodes/ExecuteWorkflowTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ExecuteWorkflowTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ExecuteWorkflowTriggerNodeParameters;
}

/**
 * Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows.
 */
export class ExecuteWorkflowTrigger<L extends string, C extends IContext = never, P extends ExecuteWorkflowTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.executeWorkflowTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
