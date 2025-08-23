// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainRetrievalQaNodeParameters } from "../nodes/ChainRetrievalQa";
import { Node, type NodeProps } from "../../nodes";

export interface ChainRetrievalQaProps extends NodeProps, ChainRetrievalQaNodeParameters {


}

export class ChainRetrievalQa<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chainRetrievalQa" as const;
    protected typeVersion = 1.6 as const;

    constructor(id: L, public readonly props?: ChainRetrievalQaProps) {

        super(id, props);

    }

    override getParameters() : ChainRetrievalQaNodeParameters {

        return this.props ?? {};

    }


}
