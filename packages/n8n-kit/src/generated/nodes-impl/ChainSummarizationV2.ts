// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainSummarizationV2NodeParameters } from "../nodes/ChainSummarizationV2";
import { Node, type NodeProps } from "../../nodes";

export interface ChainSummarizationV2Props extends NodeProps {
    readonly parameters: ChainSummarizationV2NodeParameters;
}

/**
 * Transforms text into a concise summary
 */
export class ChainSummarizationV2<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.chainSummarization" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: ChainSummarizationV2Props) {
        super(id, props);
    }

}
