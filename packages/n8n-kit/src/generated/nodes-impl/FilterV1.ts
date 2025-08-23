// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FilterV1NodeParameters } from "../nodes/FilterV1";
import { Node, type NodeProps } from "../../nodes";

export interface FilterV1Props extends NodeProps, FilterV1NodeParameters {


}

export class FilterV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FilterV1Props) {

        super(id, props);

    }

    override getParameters() : FilterV1NodeParameters {

        return this.props ?? {};

    }


}
