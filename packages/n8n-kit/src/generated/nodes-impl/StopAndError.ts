// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { StopAndErrorNodeParameters } from "../nodes/StopAndError";
import { Node, type NodeProps } from "../../nodes/node";

export interface StopAndErrorProps extends NodeProps {
    readonly parameters: StopAndErrorNodeParameters;
}

/**
 * Throw an error in the workflow
 */
export class StopAndError<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.stopAndError" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: StopAndErrorProps) {
        super(id, props);
    }

}
