// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStorePineconeNodeParameters } from "../nodes/VectorStorePinecone";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStorePineconeProps extends NodeProps {
    readonly parameters: VectorStorePineconeNodeParameters;
    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;
}

/**
 * Work with your data in Pinecone Vector Store
 */
export class VectorStorePinecone<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStorePinecone" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStorePineconeProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.pineconeApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type });
        return this;
    }

}
