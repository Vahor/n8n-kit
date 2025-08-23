// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { Credentials } from "../../credentials";
import type { MySqlV1NodeParameters } from "../nodes/MySqlV1";
import { Node, type NodeProps } from "../../nodes";

export interface MySqlV1Props extends NodeProps {

    readonly parameters: MySqlV1NodeParameters;
    readonly mySqlCredentials: Credentials<MySqlCredentials>;

}

export class MySqlV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mySql" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MySqlV1Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mySqlCredentials];

    }


}
