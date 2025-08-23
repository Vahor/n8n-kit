// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SentimentAnalysisAINodeParameters } from "../nodes/SentimentAnalysisAI";
import { Node, type NodeProps } from "../../nodes";

export interface SentimentAnalysisAIProps extends NodeProps, SentimentAnalysisAINodeParameters {


}

export class SentimentAnalysisAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sentimentAnalysis" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: SentimentAnalysisAIProps) {

        super(id, props);

    }

    override getParameters() : SentimentAnalysisAINodeParameters {

        return this.props ?? {};

    }


}

