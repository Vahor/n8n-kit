// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { OutputParserStructuredNodeParameters } from "../nodes/OutputParserStructured";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserStructuredProps extends NodeProps {
    readonly parameters: OutputParserStructuredNodeParameters;
}

/**
 * Return data in a defined JSON format
 */
export class OutputParserStructured<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.outputParserStructured" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: OutputParserStructuredProps) {
        super(id, props);
    }

    public aiOutputParser(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_outputParser" });
        return this;
    }

}
