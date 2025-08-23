// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FunctionItemNodeParameters } from "../nodes/FunctionItem";
import { Node, type NodeProps } from "../../nodes";

export interface FunctionItemProps extends NodeProps, FunctionItemNodeParameters {


}

export class FunctionItem<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.functionItem" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FunctionItemProps) {

        super(id, props);

    }

    override getParameters() : FunctionItemNodeParameters {

        return this.props ?? {};

    }


}

