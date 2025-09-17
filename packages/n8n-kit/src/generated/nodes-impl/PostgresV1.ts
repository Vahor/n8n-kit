// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostgresV1NodeParameters } from "../nodes/PostgresV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PostgresV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PostgresV1NodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Get, add and update data in Postgres
 */
export class PostgresV1<L extends string, C extends IContext = never, P extends PostgresV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.postgres" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.postgresCredentials];
    }

}
