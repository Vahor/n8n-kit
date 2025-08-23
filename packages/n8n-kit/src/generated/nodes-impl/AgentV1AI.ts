// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { AgentV1AINodeParameters } from "../nodes/AgentV1AI";
import { Node, type NodeProps } from "../../nodes";

export interface AgentV1AIProps extends NodeProps, AgentV1AINodeParameters {

    readonly mySqlCredentials?: Credentials<MySqlCredentials>;
    readonly postgresCredentials?: Credentials<PostgresCredentials>;

}

export class AgentV1AI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1.9 as const;

    constructor(id: L, public readonly props?: AgentV1AIProps) {

        super(id, props);

    }

    override getParameters() : Omit<AgentV1AINodeParameters, "mySqlCredentials | postgresCredentials"> {

        const { mySqlCredentials:_0, postgresCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mySqlCredentials, this.props.postgresCredentials];

    }


}

