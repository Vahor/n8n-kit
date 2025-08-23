// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SwitchV2NodeParameters } from "../nodes/SwitchV2";
import { Node, type NodeProps } from "../../nodes";

export interface SwitchV2Props extends NodeProps, SwitchV2NodeParameters {


}

export class SwitchV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: SwitchV2Props) {

        super(id, props);

    }

    override getParameters() : SwitchV2NodeParameters {

        return this.props ?? {};

    }


}
