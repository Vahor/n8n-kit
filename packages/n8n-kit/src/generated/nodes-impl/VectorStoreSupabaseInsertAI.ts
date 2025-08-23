// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseInsertAINodeParameters } from "../nodes/VectorStoreSupabaseInsertAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseInsertAIProps extends NodeProps, VectorStoreSupabaseInsertAINodeParameters {

    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabaseInsertAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreSupabaseInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreSupabaseInsertAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreSupabaseInsertAINodeParameters, "supabaseApiCredentials"> {

        const { supabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.supabaseApiCredentials];

    }


}

