// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserAutofixingNodeParameters } from "../nodes/OutputParserAutofixing";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserAutofixingProps extends NodeProps {

    readonly parameters: OutputParserAutofixingNodeParameters;

}

/**
 * Deprecated, use structured output parser
 */
export class OutputParserAutofixing<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.outputParserAutofixing" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: OutputParserAutofixingProps) {

        super(id, props);

    }


}
