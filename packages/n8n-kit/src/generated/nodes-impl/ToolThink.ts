// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolThinkNodeParameters } from "../nodes/ToolThink";
import { Node, type NodeProps } from "../../nodes";

export interface ToolThinkProps extends NodeProps, ToolThinkNodeParameters {


}

export class ToolThink<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolThink" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ToolThinkProps) {

        super(id, props);

    }

    override getParameters() : ToolThinkNodeParameters {

        return this.props ?? {};

    }


}
