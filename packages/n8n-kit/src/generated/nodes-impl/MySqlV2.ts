// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MySqlV2NodeParameters } from "../nodes/MySqlV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface MySqlV2Props extends NodeProps {
    readonly parameters: MySqlV2NodeParameters;
    readonly mySqlCredentials: Credentials<MySqlCredentials>;
}

/**
 * Get, add and update data in MySQL
 */
export class MySqlV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mySql" as const;
    protected typeVersion = 2.5 as const;

    constructor(id: L, override props: MySqlV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mySqlCredentials];
    }

}
