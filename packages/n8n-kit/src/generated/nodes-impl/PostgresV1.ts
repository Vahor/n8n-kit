// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { PostgresV1NodeParameters } from "../nodes/PostgresV1";
import { Node, type NodeProps } from "../../nodes";

export interface PostgresV1Props extends NodeProps {
    readonly parameters: PostgresV1NodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Get, add and update data in Postgres
 */
export class PostgresV1<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.postgres" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PostgresV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postgresCredentials];
    }

}
