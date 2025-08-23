// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainSummarizationV2NodeParameters } from "../nodes/ChainSummarizationV2";
import { Node, type NodeProps } from "../../nodes";

export interface ChainSummarizationV2Props extends NodeProps, ChainSummarizationV2NodeParameters {


}

export class ChainSummarizationV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chainSummarization" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props?: ChainSummarizationV2Props) {

        super(id, props);

    }

    override getParameters() : ChainSummarizationV2NodeParameters {

        return this.props ?? {};

    }


}
