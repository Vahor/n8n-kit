// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { Credentials } from "../../credentials";
import type { MySqlV2NodeParameters } from "../nodes/MySqlV2";
import { Node, type NodeProps } from "../../nodes";

export interface MySqlV2Props extends NodeProps {
    readonly parameters: MySqlV2NodeParameters;
    readonly mySqlCredentials: Credentials<MySqlCredentials>;
}

/**
 * Get, add and update data in MySQL
 */
export class MySqlV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.mySql" as const;
    protected typeVersion = 2.5 as const;

    constructor(id: L, override props: MySqlV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mySqlCredentials];
    }

}
