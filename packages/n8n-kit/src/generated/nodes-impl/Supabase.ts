// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SupabaseApiCredentials } from "../credentials/SupabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SupabaseNodeParameters } from "../nodes/Supabase";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SupabaseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SupabaseNodeParameters;
    readonly supabaseApiCredentials: Credentials<SupabaseApiCredentials>;
}

/**
 * Add, get, delete and update data in a table
 */
export class Supabase<L extends string, C extends IContext = never, P extends SupabaseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.supabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.supabaseApiCredentials];
    }

}
