// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { PostgresV1NodeParameters } from "../nodes/PostgresV1";
import { Node, type NodeProps } from "../../nodes";

export interface PostgresV1Props extends NodeProps, PostgresV1NodeParameters {

    readonly postgresCredentials: Credentials<PostgresCredentials>;

}

export class PostgresV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.postgres" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: PostgresV1Props) {

        super(id, props);

    }

    override getParameters() {

        const { postgresCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.postgresCredentials];

    }


}

