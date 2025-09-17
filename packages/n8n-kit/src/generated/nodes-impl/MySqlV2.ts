// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MySqlV2NodeParameters } from "../nodes/MySqlV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MySqlV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MySqlV2NodeParameters;
    readonly mySqlCredentials: Credentials<MySqlCredentials>;
}

/**
 * Get, add and update data in MySQL
 */
export class MySqlV2<L extends string, C extends IContext = never, P extends MySqlV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mySql" as const;
    protected typeVersion = 2.5 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mySqlCredentials];
    }

}
