// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolVectorStoreNodeParameters } from "../nodes/ToolVectorStore";
import { Node, type NodeProps } from "../../nodes";

export interface ToolVectorStoreProps extends NodeProps, ToolVectorStoreNodeParameters {


}

export class ToolVectorStore<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolVectorStore" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ToolVectorStoreProps) {

        super(id, props);

    }

    override getParameters() : ToolVectorStoreNodeParameters {

        return this.props ?? {};

    }


}
