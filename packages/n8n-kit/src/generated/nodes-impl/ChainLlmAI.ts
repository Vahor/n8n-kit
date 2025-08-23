// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainLlmAINodeParameters } from "../nodes/ChainLlmAI";
import { Node, type NodeProps } from "../../nodes";

export interface ChainLlmAIProps extends NodeProps, ChainLlmAINodeParameters {


}

export class ChainLlmAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chainLlm" as const;
    protected typeVersion = 1.7 as const;

    constructor(id: L, public readonly props?: ChainLlmAIProps) {

        super(id, props);

    }

    override getParameters() : ChainLlmAINodeParameters {

        return this.props ?? {};

    }


}
