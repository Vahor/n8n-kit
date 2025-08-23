// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseNodeParameters } from "../nodes/VectorStoreSupabase";
import { Node, type NodeProps } from "../../nodes";

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
    }

    override getCredentials() {
        return [this.props!.supabaseApiCredentials];
    }

}
