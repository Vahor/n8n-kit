// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostgresTriggerNodeParameters } from "../nodes/PostgresTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PostgresTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PostgresTriggerNodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Listens to Postgres messages
 */
export class PostgresTrigger<L extends string, C extends IContext = never, P extends PostgresTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.postgresTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.postgresCredentials];
    }

}
