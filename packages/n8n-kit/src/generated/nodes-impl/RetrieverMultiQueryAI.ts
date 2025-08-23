// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverMultiQueryAINodeParameters } from "../nodes/RetrieverMultiQueryAI";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverMultiQueryAIProps extends NodeProps, RetrieverMultiQueryAINodeParameters {


}

export class RetrieverMultiQueryAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverMultiQuery" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RetrieverMultiQueryAIProps) {

        super(id, props);

    }

    override getParameters() : RetrieverMultiQueryAINodeParameters {

        return this.props ?? {};

    }


}

