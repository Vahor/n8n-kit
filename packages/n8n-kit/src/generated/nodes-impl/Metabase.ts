// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MetabaseApiCredentials } from "../credentials/MetabaseApi.ts";
import type { Credentials } from "../../credentials";
import type { MetabaseNodeParameters } from "../nodes/Metabase";
import { Node, type NodeProps } from "../../nodes/node";

export interface MetabaseProps extends NodeProps {
    readonly parameters: MetabaseNodeParameters;
    readonly metabaseApiCredentials: Credentials<MetabaseApiCredentials>;
}

/**
 * Use the Metabase API
 */
export class Metabase<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.metabase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MetabaseProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.metabaseApiCredentials];
    }

}
