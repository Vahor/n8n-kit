// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChainRetrievalQaNodeParameters } from "../nodes/ChainRetrievalQa";
import { Node, type NodeProps } from "../../nodes";

export interface ChainRetrievalQaProps extends NodeProps {

    readonly parameters: ChainRetrievalQaNodeParameters;

}

export class ChainRetrievalQa<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.chainRetrievalQa" as const;
    protected typeVersion = 1.6 as const;

    constructor(id: L, override props?: ChainRetrievalQaProps) {

        super(id, props);

    }


}
