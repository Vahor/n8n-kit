// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolCodeAINodeParameters } from "../nodes/ToolCodeAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolCodeAIProps extends NodeProps, ToolCodeAINodeParameters {


}

export class ToolCodeAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolCode" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: ToolCodeAIProps) {

        super(id, props);

    }

    override getParameters() : ToolCodeAINodeParameters {

        return this.props ?? {};

    }


}

