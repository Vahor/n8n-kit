// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreSupabaseNodeParameters } from "../nodes/VectorStoreSupabase";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreSupabaseProps extends NodeProps {
    readonly parameters: VectorStoreSupabaseNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;
}

/**
 * Work with your data in Supabase Vector Store
 */
export class VectorStoreSupabase<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreSupabase" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreSupabaseProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.supabaseApiCredentials];
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
