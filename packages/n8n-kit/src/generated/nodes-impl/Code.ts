// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CodeNodeParameters } from "../nodes/Code";
import { Node, type NodeProps } from "../../nodes/node";

export interface CodeProps extends NodeProps {
    readonly parameters: CodeNodeParameters;
}

/**
 * Run custom JavaScript or Python code
 */
export class Code<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.code" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: CodeProps) {
        super(id, props);
    }

}
