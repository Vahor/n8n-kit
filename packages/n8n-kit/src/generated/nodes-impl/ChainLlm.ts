// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainLlmNodeParameters } from "../nodes/ChainLlm";
import { Node, type NodeProps } from "../../nodes";

export interface ChainLlmProps extends NodeProps, ChainLlmNodeParameters {


}

export class ChainLlm<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chainLlm" as const;
    protected typeVersion = 1.7 as const;

    constructor(id: L, public readonly props?: ChainLlmProps) {

        super(id, props);

    }

    override getParameters() : ChainLlmNodeParameters {

        return this.props ?? {};

    }


}
