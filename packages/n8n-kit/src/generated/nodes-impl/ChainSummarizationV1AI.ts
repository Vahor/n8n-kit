// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainSummarizationV1AINodeParameters } from "../nodes/ChainSummarizationV1AI";
import { Node, type NodeProps } from "../../nodes";

export interface ChainSummarizationV1AIProps extends NodeProps, ChainSummarizationV1AINodeParameters {


}

export class ChainSummarizationV1AI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ChainSummarizationV1AIProps) {

        super(id, props);

    }

    override getParameters() : ChainSummarizationV1AINodeParameters {

        return this.props ?? {};

    }


}

