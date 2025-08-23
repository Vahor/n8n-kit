// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserStructuredNodeParameters } from "../nodes/OutputParserStructured";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserStructuredProps extends NodeProps, OutputParserStructuredNodeParameters {


}

export class OutputParserStructured<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.outputParserStructured" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: OutputParserStructuredProps) {

        super(id, props);

    }

    override getParameters() : OutputParserStructuredNodeParameters {

        return this.props ?? {};

    }


}
