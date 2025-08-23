// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { SupabaseNodeParameters } from "../nodes/Supabase";
import { Node, type NodeProps } from "../../nodes";

export interface SupabaseProps extends NodeProps {

    readonly parameters: SupabaseNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;

}

export class Supabase<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.supabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SupabaseProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.supabaseApiCredentials];

    }


}
