// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolWorkflowV1AINodeParameters } from "../nodes/ToolWorkflowV1AI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWorkflowV1AIProps extends NodeProps, ToolWorkflowV1AINodeParameters {


}

export class ToolWorkflowV1AI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolWorkflow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: ToolWorkflowV1AIProps) {

        super(id, props);

    }

    override getParameters() : ToolWorkflowV1AINodeParameters {

        return this.props ?? {};

    }


}
