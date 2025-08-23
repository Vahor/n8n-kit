// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IfV2NodeParameters } from "../nodes/IfV2";
import { Node, type NodeProps } from "../../nodes";

export interface IfV2Props extends NodeProps, IfV2NodeParameters {


}

export class IfV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, public readonly props?: IfV2Props) {

        super(id, props);

    }

    override getParameters() : IfV2NodeParameters {

        return this.props ?? {};

    }


}

