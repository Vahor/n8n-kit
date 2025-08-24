// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreSupabaseLoadNodeParameters } from "../nodes/VectorStoreSupabaseLoad";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreSupabaseLoadProps extends NodeProps {
    readonly parameters: VectorStoreSupabaseLoadNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;
}

/**
 * Load data from Supabase Vector Store index
 */
export class VectorStoreSupabaseLoad<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStoreSupabaseLoadProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.supabaseApiCredentials];
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
