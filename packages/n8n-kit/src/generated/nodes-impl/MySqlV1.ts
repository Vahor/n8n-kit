// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MySqlV1NodeParameters } from "../nodes/MySqlV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MySqlV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MySqlV1NodeParameters;
    readonly mySqlCredentials: Credentials<MySqlCredentials>;
}

/**
 * Get, add and update data in MySQL
 */
export class MySqlV1<L extends string, C extends IContext = never, P extends MySqlV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mySql" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mySqlCredentials];
    }

}
