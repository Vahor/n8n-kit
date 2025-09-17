// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CodeNodeParameters } from "../nodes/Code";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CodeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CodeNodeParameters;
}

/**
 * Run custom JavaScript or Python code
 */
export class Code<L extends string, C extends IContext = never, P extends CodeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.code" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
