// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NoOpNodeParameters } from "../nodes/NoOp";
import { Node, type NodeProps } from "../../nodes";

export interface NoOpProps extends NodeProps, NoOpNodeParameters {


}

export class NoOp<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.noOp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: NoOpProps) {

        super(id, props);

    }

    override getParameters() : NoOpNodeParameters {

        return this.props ?? {};

    }


}

