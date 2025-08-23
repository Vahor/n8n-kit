// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LimitNodeParameters } from "../nodes/Limit";
import { Node, type NodeProps } from "../../nodes";

export interface LimitProps extends NodeProps {

    readonly parameters: LimitNodeParameters;

}

/**
 * Restrict the number of items
 */
export class Limit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.limit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: LimitProps) {

        super(id, props);

    }


}
