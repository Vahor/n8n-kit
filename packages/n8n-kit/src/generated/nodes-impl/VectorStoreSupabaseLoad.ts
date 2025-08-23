// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseLoadNodeParameters } from "../nodes/VectorStoreSupabaseLoad";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseLoadProps extends NodeProps, VectorStoreSupabaseLoadNodeParameters {

    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabaseLoad<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreSupabaseLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreSupabaseLoadProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreSupabaseLoadNodeParameters, "supabaseApiCredentials"> {

        const { supabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.supabaseApiCredentials];

    }


}
