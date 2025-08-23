// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SentimentAnalysisNodeParameters } from "../nodes/SentimentAnalysis";
import { Node, type NodeProps } from "../../nodes";

export interface SentimentAnalysisProps extends NodeProps, SentimentAnalysisNodeParameters {


}

export class SentimentAnalysis<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sentimentAnalysis" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: SentimentAnalysisProps) {

        super(id, props);

    }

    override getParameters() : SentimentAnalysisNodeParameters {

        return this.props ?? {};

    }


}
