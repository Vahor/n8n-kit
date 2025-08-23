// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseInsertNodeParameters } from "../nodes/VectorStoreSupabaseInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseInsertProps extends NodeProps {

    readonly parameters: VectorStoreSupabaseInsertNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabaseInsert<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreSupabaseInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStoreSupabaseInsertProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.supabaseApiCredentials];

    }


}
