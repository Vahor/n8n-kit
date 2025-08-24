// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SnowflakeCredentials } from "../credentials/Snowflake.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SnowflakeNodeParameters } from "../nodes/Snowflake";
import { Node, type NodeProps } from "../../nodes/node";

export interface SnowflakeProps extends NodeProps {
    readonly parameters: SnowflakeNodeParameters;
    readonly snowflakeCredentials: Credentials<SnowflakeCredentials>;
}

/**
 * Get, add and update data in Snowflake
 */
export class Snowflake<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.snowflake" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SnowflakeProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.snowflakeCredentials];
    }

}
