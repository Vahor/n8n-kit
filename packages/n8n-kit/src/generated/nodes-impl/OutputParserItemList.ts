// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { OutputParserItemListNodeParameters } from "../nodes/OutputParserItemList";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OutputParserItemListProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OutputParserItemListNodeParameters;
}

/**
 * Return the results as separate items
 */
export class OutputParserItemList<L extends string, C extends IContext = never, P extends OutputParserItemListProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.outputParserItemList" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiOutputParser(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_outputParser" });
        return this;
    }

}
