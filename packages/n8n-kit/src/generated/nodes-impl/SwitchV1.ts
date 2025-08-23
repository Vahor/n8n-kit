// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SwitchV1NodeParameters } from "../nodes/SwitchV1";
import { Node, type NodeProps } from "../../nodes";

export interface SwitchV1Props extends NodeProps, SwitchV1NodeParameters {


}

export class SwitchV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SwitchV1Props) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

