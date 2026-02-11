// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStorePineconeInsertNodeParameters } from "../nodes/VectorStorePineconeInsert";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VectorStorePineconeInsertProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VectorStorePineconeInsertNodeParameters;
    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;
}

/**
 * Insert data into Pinecone Vector Store index
 */
export class VectorStorePineconeInsert<L extends string, C extends IContext = never, P extends VectorStorePineconeInsertProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props.pineconeApiCredentials];
    }

    public withDocument(next: State): this {
        super.addNext(next.startState, { type: "ai_document", direction: "input" });
        return this;
    }

    public withEmbedding(next: State): this {
        super.addNext(next.startState, { type: "ai_embedding", direction: "input" });
        return this;
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
