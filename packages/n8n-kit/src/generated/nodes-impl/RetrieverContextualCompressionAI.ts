// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverContextualCompressionAINodeParameters } from "../nodes/RetrieverContextualCompressionAI";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverContextualCompressionAIProps extends NodeProps, RetrieverContextualCompressionAINodeParameters {


}

export class RetrieverContextualCompressionAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverContextualCompression" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RetrieverContextualCompressionAIProps) {

        super(id, props);

    }

    override getParameters() : RetrieverContextualCompressionAINodeParameters {

        return this.props ?? {};

    }


}
