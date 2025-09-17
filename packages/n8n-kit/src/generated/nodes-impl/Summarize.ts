// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SummarizeNodeParameters } from "../nodes/Summarize";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SummarizeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SummarizeNodeParameters;
}

/**
 * Sum, count, max, etc. across items
 */
export class Summarize<L extends string, C extends IContext = never, P extends SummarizeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.summarize" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
