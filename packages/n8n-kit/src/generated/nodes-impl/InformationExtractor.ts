// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InformationExtractorNodeParameters } from "../nodes/InformationExtractor";
import { Node, type NodeProps } from "../../nodes";

export interface InformationExtractorProps extends NodeProps {

    readonly parameters: InformationExtractorNodeParameters;

}

export class InformationExtractor<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.informationExtractor" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: InformationExtractorProps) {

        super(id, props);

    }


}
