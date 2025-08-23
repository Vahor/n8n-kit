// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainSummarizationV2AINodeParameters } from "../nodes/ChainSummarizationV2AI";
import { Node, type NodeProps } from "../../nodes";

export interface ChainSummarizationV2AIProps extends NodeProps, ChainSummarizationV2AINodeParameters {


}

export class ChainSummarizationV2AI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props?: ChainSummarizationV2AIProps) {

        super(id, props);

    }

    override getParameters() : ChainSummarizationV2AINodeParameters {

        return this.props ?? {};

    }


}
