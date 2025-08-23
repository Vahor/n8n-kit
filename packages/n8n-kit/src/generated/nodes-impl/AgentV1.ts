// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { AgentV1NodeParameters } from "../nodes/AgentV1";
import { Node, type NodeProps } from "../../nodes";

export interface AgentV1Props extends NodeProps {
    readonly parameters: AgentV1NodeParameters;
    readonly mySqlCredentials?: Credentials<MySqlCredentials>;
    readonly postgresCredentials?: Credentials<PostgresCredentials>;
}

/**
 * Generates an action plan and executes it. Can use external tools.
 */
export class AgentV1<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.agent" as const;
    protected typeVersion = 1.9 as const;

    constructor(id: L, override props?: AgentV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mySqlCredentials, this.props!.postgresCredentials];
    }

}
