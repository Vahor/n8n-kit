// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreZepInsertNodeParameters } from "../nodes/VectorStoreZepInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepInsertProps extends NodeProps {
    readonly parameters: VectorStoreZepInsertNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;
}

/**
 * Insert data into Zep Vector Store index
 */
export class VectorStoreZepInsert<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreZepInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStoreZepInsertProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.zepApiCredentials];
    }

    public withDocument(next: State): this {
        super.addNext(next.startState, { type: "ai_document", direction: "input" });
        return this;
    }

    public withEmbedding(next: State): this {
        super.addNext(next.startState, { type: "ai_embedding", direction: "input" });
        return this;
    }

}
