// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftSqlCredentials } from "../credentials/MicrosoftSql.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftSqlNodeParameters } from "../nodes/MicrosoftSql";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftSqlProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftSqlNodeParameters;
    readonly microsoftSqlCredentials: Credentials<MicrosoftSqlCredentials>;
}

/**
 * Get, add and update data in Microsoft SQL
 */
export class MicrosoftSql<L extends string, C extends IContext = never, P extends MicrosoftSqlProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftSql" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftSqlCredentials];
    }

}
