// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainSummarizationV1NodeParameters } from "../nodes/ChainSummarizationV1";
import { Node, type NodeProps } from "../../nodes";

export interface ChainSummarizationV1Props extends NodeProps {

    readonly parameters: ChainSummarizationV1NodeParameters;

}

export class ChainSummarizationV1<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.chainSummarization" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ChainSummarizationV1Props) {

        super(id, props);

    }


}
