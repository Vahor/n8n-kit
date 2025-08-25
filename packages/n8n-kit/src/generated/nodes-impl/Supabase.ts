// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SupabaseNodeParameters } from "../nodes/Supabase";
import { Node, type NodeProps } from "../../nodes/node";

export interface SupabaseProps extends NodeProps {
    readonly parameters: SupabaseNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;
}

/**
 * Add, get, delete and update data in a table
 */
export class Supabase<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.supabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SupabaseProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.supabaseApiCredentials];
    }

}
