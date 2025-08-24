// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QdrantApiCredentials } from "../credentials/QdrantApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreQdrantNodeParameters } from "../nodes/VectorStoreQdrant";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreQdrantProps extends NodeProps {
    readonly parameters: VectorStoreQdrantNodeParameters;
    readonly qdrantApiCredentials: Credentials<QdrantApiCredentials>;
}

/**
 * Work with your data in a Qdrant collection
 */
export class VectorStoreQdrant<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreQdrant" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreQdrantProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.qdrantApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toCustom(next: IChainable): this {
        super.addNext(next.startState, { type: "custom" });
        return this;
    }

}
