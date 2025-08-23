// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolThinkAINodeParameters } from "../nodes/ToolThinkAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolThinkAIProps extends NodeProps, ToolThinkAINodeParameters {


}

export class ToolThinkAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolThink" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ToolThinkAIProps) {

        super(id, props);

    }

    override getParameters() : ToolThinkAINodeParameters {

        return this.props ?? {};

    }


}
