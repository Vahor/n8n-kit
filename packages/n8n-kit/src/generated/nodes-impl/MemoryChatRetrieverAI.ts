// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryChatRetrieverAINodeParameters } from "../nodes/MemoryChatRetrieverAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryChatRetrieverAIProps extends NodeProps, MemoryChatRetrieverAINodeParameters {


}

export class MemoryChatRetrieverAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryChatRetriever" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MemoryChatRetrieverAIProps) {

        super(id, props);

    }

    override getParameters() : MemoryChatRetrieverAINodeParameters {

        return this.props ?? {};

    }


}
