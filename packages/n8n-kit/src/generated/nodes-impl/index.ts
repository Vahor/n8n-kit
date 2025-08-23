// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { indexNodeParameters } from "../nodes/index";
import { Node, type NodeProps } from "../../nodes";

export interface indexProps extends NodeProps, indexNodeParameters {


}

export class index<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = undefined as const;

    constructor(id: L, public readonly props?: indexProps) {

        super(id, props);

    }

    override getParameters() : indexNodeParameters {

        return this.props ?? {};

    }


}
