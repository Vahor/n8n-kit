// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolExecutorNodeParameters } from "../nodes/ToolExecutor";
import { Node, type NodeProps } from "../../nodes";

export interface ToolExecutorProps extends NodeProps, ToolExecutorNodeParameters {


}

export class ToolExecutor<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolExecutor" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ToolExecutorProps) {

        super(id, props);

    }

    override getParameters() : ToolExecutorNodeParameters {

        return this.props ?? {};

    }


}
