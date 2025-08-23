// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SetV2NodeParameters } from "../nodes/SetV2";
import { Node, type NodeProps } from "../../nodes";

export interface SetV2Props extends NodeProps, SetV2NodeParameters {


}

export class SetV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.set" as const;
    protected typeVersion = 3.4 as const;

    constructor(id: L, public readonly props?: SetV2Props) {

        super(id, props);

    }

    override getParameters() : SetV2NodeParameters {

        return this.props ?? {};

    }


}

