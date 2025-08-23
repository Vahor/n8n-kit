// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainRetrievalQaAINodeParameters } from "../nodes/ChainRetrievalQaAI";
import { Node, type NodeProps } from "../../nodes";

export interface ChainRetrievalQaAIProps extends NodeProps, ChainRetrievalQaAINodeParameters {


}

export class ChainRetrievalQaAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chainRetrievalQa" as const;
    protected typeVersion = 1.6 as const;

    constructor(id: L, public readonly props?: ChainRetrievalQaAIProps) {

        super(id, props);

    }

    override getParameters() : ChainRetrievalQaAINodeParameters {

        return this.props ?? {};

    }


}

