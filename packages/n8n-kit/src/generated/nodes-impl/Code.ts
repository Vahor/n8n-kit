// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CodeNodeParameters } from "../nodes/Code";
import { Node, type NodeProps } from "../../nodes";

export interface CodeProps extends NodeProps, CodeNodeParameters {


}

export class Code<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.code" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: CodeProps) {

        super(id, props);

    }

    override getParameters() : CodeNodeParameters {

        return this.props ?? {};

    }


}
