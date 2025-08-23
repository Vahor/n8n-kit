// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseNodeParameters } from "../nodes/VectorStoreSupabase";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseProps extends NodeProps, VectorStoreSupabaseNodeParameters {

    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabase<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreSupabase" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreSupabaseProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreSupabaseNodeParameters, "supabaseApiCredentials"> {

        const { supabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.supabaseApiCredentials];

    }


}
