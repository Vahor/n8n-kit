// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SentimentAnalysisNodeParameters } from "../nodes/SentimentAnalysis";
import { Node, type NodeProps } from "../../nodes";

export interface SentimentAnalysisProps extends NodeProps {

    readonly parameters: SentimentAnalysisNodeParameters;

}

export class SentimentAnalysis<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.sentimentAnalysis" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: SentimentAnalysisProps) {

        super(id, props);

    }


}
