// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverContextualCompressionNodeParameters } from "../nodes/RetrieverContextualCompression";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverContextualCompressionProps extends NodeProps, RetrieverContextualCompressionNodeParameters {


}

export class RetrieverContextualCompression<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverContextualCompression" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RetrieverContextualCompressionProps) {

        super(id, props);

    }

    override getParameters() : RetrieverContextualCompressionNodeParameters {

        return this.props ?? {};

    }


}
