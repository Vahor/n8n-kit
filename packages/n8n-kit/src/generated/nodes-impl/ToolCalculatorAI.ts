// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolCalculatorAINodeParameters } from "../nodes/ToolCalculatorAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolCalculatorAIProps extends NodeProps, ToolCalculatorAINodeParameters {


}

export class ToolCalculatorAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolCalculator" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ToolCalculatorAIProps) {

        super(id, props);

    }

    override getParameters() : ToolCalculatorAINodeParameters {

        return this.props ?? {};

    }


}

