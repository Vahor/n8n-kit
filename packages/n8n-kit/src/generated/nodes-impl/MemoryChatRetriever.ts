// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryChatRetrieverNodeParameters } from "../nodes/MemoryChatRetriever";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryChatRetrieverProps extends NodeProps, MemoryChatRetrieverNodeParameters {


}

export class MemoryChatRetriever<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryChatRetriever" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MemoryChatRetrieverProps) {

        super(id, props);

    }

    override getParameters() : MemoryChatRetrieverNodeParameters {

        return this.props ?? {};

    }


}
