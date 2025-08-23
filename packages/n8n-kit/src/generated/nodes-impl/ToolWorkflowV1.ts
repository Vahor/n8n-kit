// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolWorkflowV1NodeParameters } from "../nodes/ToolWorkflowV1";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWorkflowV1Props extends NodeProps, ToolWorkflowV1NodeParameters {


}

export class ToolWorkflowV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolWorkflow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: ToolWorkflowV1Props) {

        super(id, props);

    }

    override getParameters() : ToolWorkflowV1NodeParameters {

        return this.props ?? {};

    }


}
