// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InformationExtractorAINodeParameters } from "../nodes/InformationExtractorAI";
import { Node, type NodeProps } from "../../nodes";

export interface InformationExtractorAIProps extends NodeProps, InformationExtractorAINodeParameters {


}

export class InformationExtractorAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.informationExtractor" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props?: InformationExtractorAIProps) {

        super(id, props);

    }

    override getParameters() : InformationExtractorAINodeParameters {

        return this.props ?? {};

    }


}
