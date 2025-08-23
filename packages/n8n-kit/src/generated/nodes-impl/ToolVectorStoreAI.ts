// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolVectorStoreAINodeParameters } from "../nodes/ToolVectorStoreAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolVectorStoreAIProps extends NodeProps, ToolVectorStoreAINodeParameters {


}

export class ToolVectorStoreAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolVectorStore" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ToolVectorStoreAIProps) {

        super(id, props);

    }

    override getParameters() : ToolVectorStoreAINodeParameters {

        return this.props ?? {};

    }


}
