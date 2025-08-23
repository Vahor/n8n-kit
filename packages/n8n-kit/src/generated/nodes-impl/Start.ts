// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StartNodeParameters } from "../nodes/Start";
import { Node, type NodeProps } from "../../nodes";

export interface StartProps extends NodeProps, StartNodeParameters {


}

export class Start<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.start" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: StartProps) {

        super(id, props);

    }

    override getParameters() : StartNodeParameters {

        return this.props ?? {};

    }


}
