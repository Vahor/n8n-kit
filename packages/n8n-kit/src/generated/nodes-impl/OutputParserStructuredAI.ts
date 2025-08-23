// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserStructuredAINodeParameters } from "../nodes/OutputParserStructuredAI";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserStructuredAIProps extends NodeProps, OutputParserStructuredAINodeParameters {


}

export class OutputParserStructuredAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.outputParserStructured" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: OutputParserStructuredAIProps) {

        super(id, props);

    }

    override getParameters() : OutputParserStructuredAINodeParameters {

        return this.props ?? {};

    }


}

