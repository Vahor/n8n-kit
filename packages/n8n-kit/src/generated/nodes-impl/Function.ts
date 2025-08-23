// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FunctionNodeParameters } from "../nodes/Function";
import { Node, type NodeProps } from "../../nodes";

export interface FunctionProps extends NodeProps, FunctionNodeParameters {


}

export class Function<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.function" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FunctionProps) {

        super(id, props);

    }

    override getParameters() : FunctionNodeParameters {

        return this.props ?? {};

    }


}
