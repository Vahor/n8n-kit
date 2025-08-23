// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseLoadNodeParameters } from "../nodes/VectorStoreSupabaseLoad";
import { Node, type NodeProps } from "../../nodes";

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

    }

    override getCredentials() {

        return [this.props!.supabaseApiCredentials];

    }


}
