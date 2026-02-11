// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStorePineconeLoadNodeParameters } from "../nodes/VectorStorePineconeLoad";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VectorStorePineconeLoadProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VectorStorePineconeLoadNodeParameters;
    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;
}

/**
 * Load data from Pinecone Vector Store index
 */
export class VectorStorePineconeLoad<L extends string, C extends IContext = never, P extends VectorStorePineconeLoadProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props.pineconeApiCredentials];
    }

    public withEmbedding(next: State): this {
        super.addNext(next.startState, { type: "ai_embedding", direction: "input" });
        return this;
    }

    public toAiVectorStore(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_vectorStore" });
        return this;
    }

}
