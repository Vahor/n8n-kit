// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolExecutorAINodeParameters } from "../nodes/ToolExecutorAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolExecutorAIProps extends NodeProps, ToolExecutorAINodeParameters {


}

export class ToolExecutorAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolExecutor" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ToolExecutorAIProps) {

        super(id, props);

    }

    override getParameters() : ToolExecutorAINodeParameters {

        return this.props ?? {};

    }


}

