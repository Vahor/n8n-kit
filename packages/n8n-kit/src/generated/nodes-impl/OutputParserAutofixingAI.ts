// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserAutofixingAINodeParameters } from "../nodes/OutputParserAutofixingAI";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserAutofixingAIProps extends NodeProps, OutputParserAutofixingAINodeParameters {


}

export class OutputParserAutofixingAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.outputParserAutofixing" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OutputParserAutofixingAIProps) {

        super(id, props);

    }

    override getParameters() : OutputParserAutofixingAINodeParameters {

        return this.props ?? {};

    }


}

