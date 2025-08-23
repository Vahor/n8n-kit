// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftSqlCredentials } from "../credentials/MicrosoftSql.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftSqlNodeParameters } from "../nodes/MicrosoftSql";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftSqlProps extends NodeProps {
    readonly parameters: MicrosoftSqlNodeParameters;
    readonly microsoftSqlCredentials: Credentials<MicrosoftSqlCredentials>;
}

/**
 * Get, add and update data in Microsoft SQL
 */
export class MicrosoftSql<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.microsoftSql" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: MicrosoftSqlProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftSqlCredentials];
    }

}
