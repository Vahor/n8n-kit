// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainLlmNodeParameters } from "../nodes/ChainLlm";
import { Node, type NodeProps } from "../../nodes";

export interface ChainLlmProps extends NodeProps {

    readonly parameters: ChainLlmNodeParameters;

}

/**
 * A simple chain to prompt a large language model
 */
export class ChainLlm<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.chainLlm" as const;
    protected typeVersion = 1.7 as const;

    constructor(id: L, override props?: ChainLlmProps) {

        super(id, props);

    }


}
