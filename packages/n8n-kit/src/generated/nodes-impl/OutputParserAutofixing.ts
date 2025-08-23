// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserAutofixingNodeParameters } from "../nodes/OutputParserAutofixing";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserAutofixingProps extends NodeProps, OutputParserAutofixingNodeParameters {


}

export class OutputParserAutofixing<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.outputParserAutofixing" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OutputParserAutofixingProps) {

        super(id, props);

    }

    override getParameters() : OutputParserAutofixingNodeParameters {

        return this.props ?? {};

    }


}
