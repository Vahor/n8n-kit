// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { OutputParserAutofixingNodeParameters } from "../nodes/OutputParserAutofixing";
import { Node, type NodeProps } from "../../nodes/node";

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
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withModel(next: State): this {
        super.addNext(next.startState, { type: "ai_languageModel", direction: "input" });
        return this;
    }

    public withOutputParser(next: State): this {
        super.addNext(next.startState, { type: "ai_outputParser", direction: "input" });
        return this;
    }

    public toAiOutputParser(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_outputParser" });
        return this;
    }

}
