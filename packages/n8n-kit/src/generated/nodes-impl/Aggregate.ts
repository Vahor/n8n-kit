// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AggregateNodeParameters } from "../nodes/Aggregate";
import { Node, type NodeProps } from "../../nodes";

export interface AggregateProps extends NodeProps {

    readonly parameters: AggregateNodeParameters;

}

/**
 * Combine a field from many items into a list in a single item
 */
export class Aggregate<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.aggregate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AggregateProps) {

        super(id, props);

    }


}
