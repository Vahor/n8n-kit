// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolCodeNodeParameters } from "../nodes/ToolCode";
import { Node, type NodeProps } from "../../nodes";

export interface ToolCodeProps extends NodeProps, ToolCodeNodeParameters {


}

export class ToolCode<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolCode" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: ToolCodeProps) {

        super(id, props);

    }

    override getParameters() : ToolCodeNodeParameters {

        return this.props ?? {};

    }


}
