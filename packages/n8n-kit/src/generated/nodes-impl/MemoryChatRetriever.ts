// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryChatRetrieverNodeParameters } from "../nodes/MemoryChatRetriever";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryChatRetrieverProps extends NodeProps {

    readonly parameters: MemoryChatRetrieverNodeParameters;

}

/**
 * Retrieve chat messages from memory and use them in the workflow
 */
export class MemoryChatRetriever<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.memoryChatRetriever" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MemoryChatRetrieverProps) {

        super(id, props);

    }


}
