// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreSupabaseLoadAINodeParameters } from "../nodes/VectorStoreSupabaseLoadAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreSupabaseLoadAIProps extends NodeProps, VectorStoreSupabaseLoadAINodeParameters {

    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class VectorStoreSupabaseLoadAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreSupabaseLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreSupabaseLoadAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreSupabaseLoadAINodeParameters, "supabaseApiCredentials"> {

        const { supabaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.supabaseApiCredentials];

    }


}
