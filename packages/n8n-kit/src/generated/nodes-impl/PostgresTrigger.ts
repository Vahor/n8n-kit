// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostgresTriggerNodeParameters } from "../nodes/PostgresTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface PostgresTriggerProps extends NodeProps {
    readonly parameters: PostgresTriggerNodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Listens to Postgres messages
 */
export class PostgresTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.postgresTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PostgresTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postgresCredentials];
    }

}
