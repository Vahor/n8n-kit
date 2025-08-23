// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseInsertNodeParameters } from "../nodes/VectorStoreSupabaseInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseInsertProps extends NodeProps, VectorStoreSupabaseInsertNodeParameters {

    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabaseInsert<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreSupabaseInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreSupabaseInsertProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreSupabaseInsertNodeParameters, "supabaseApiCredentials"> {

        const { supabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.supabaseApiCredentials];

    }


}
