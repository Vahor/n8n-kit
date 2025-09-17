// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostgresV2NodeParameters } from "../nodes/PostgresV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PostgresV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PostgresV2NodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Get, add and update data in Postgres
 */
export class PostgresV2<L extends string, C extends IContext = never, P extends PostgresV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.postgres" as const;
    protected typeVersion = 2.6 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.postgresCredentials];
    }

}
