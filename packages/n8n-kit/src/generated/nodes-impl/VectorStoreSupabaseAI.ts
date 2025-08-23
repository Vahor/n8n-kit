// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseAINodeParameters } from "../nodes/VectorStoreSupabaseAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseAIProps extends NodeProps, VectorStoreSupabaseAINodeParameters {

    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabaseAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreSupabase" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreSupabaseAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreSupabaseAINodeParameters, "supabaseApiCredentials"> {

        const { supabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.supabaseApiCredentials];

    }


}
