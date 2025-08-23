// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SetV1NodeParameters } from "../nodes/SetV1";
import { Node, type NodeProps } from "../../nodes";

export interface SetV1Props extends NodeProps, SetV1NodeParameters {


}

export class SetV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.set" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: SetV1Props) {

        super(id, props);

    }

    override getParameters() : SetV1NodeParameters {

        return this.props ?? {};

    }


}

