// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostgresV2NodeParameters } from "../nodes/PostgresV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface PostgresV2Props extends NodeProps {
    readonly parameters: PostgresV2NodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Get, add and update data in Postgres
 */
export class PostgresV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.postgres" as const;
    protected typeVersion = 2.6 as const;

    constructor(id: L, override props: PostgresV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postgresCredentials];
    }

}
