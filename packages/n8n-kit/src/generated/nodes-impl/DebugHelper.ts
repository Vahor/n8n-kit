// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DebugHelperNodeParameters } from "../nodes/DebugHelper";
import { Node, type NodeProps } from "../../nodes";

export interface DebugHelperProps extends NodeProps, DebugHelperNodeParameters {


}

export class DebugHelper<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.debugHelper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: DebugHelperProps) {

        super(id, props);

    }

    override getParameters() : DebugHelperNodeParameters {

        return this.props ?? {};

    }


}

