// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreSupabaseInsertNodeParameters } from "../nodes/VectorStoreSupabaseInsert";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreSupabaseInsertProps extends NodeProps {
    readonly parameters: VectorStoreSupabaseInsertNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;
}

/**
 * Insert data into Supabase Vector Store index [https://supabase.com/docs/guides/ai/langchain]
 */
export class VectorStoreSupabaseInsert<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreSupabaseInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStoreSupabaseInsertProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.supabaseApiCredentials];
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
