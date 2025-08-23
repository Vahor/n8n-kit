// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolCalculatorNodeParameters } from "../nodes/ToolCalculator";
import { Node, type NodeProps } from "../../nodes";

export interface ToolCalculatorProps extends NodeProps, ToolCalculatorNodeParameters {


}

export class ToolCalculator<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolCalculator" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ToolCalculatorProps) {

        super(id, props);

    }

    override getParameters() : ToolCalculatorNodeParameters {

        return this.props ?? {};

    }


}
