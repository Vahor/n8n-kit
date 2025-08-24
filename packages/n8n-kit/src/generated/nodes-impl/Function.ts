// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FunctionNodeParameters } from "../nodes/Function";
import { Node, type NodeProps } from "../../nodes/node";

export interface FunctionProps extends NodeProps {
    readonly parameters: FunctionNodeParameters;
}

/**
 * Run custom function code which gets executed once and allows you to add, remove, change and replace items
 */
export class Function<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.function" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: FunctionProps) {
        super(id, props);
    }

}
