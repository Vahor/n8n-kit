// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SnowflakeCredentials } from "../credentials/Snowflake.ts";
import type { Credentials } from "../../credentials";
import type { SnowflakeNodeParameters } from "../nodes/Snowflake";
import { Node, type NodeProps } from "../../nodes";

export interface SnowflakeProps extends NodeProps, SnowflakeNodeParameters {

    readonly snowflakeCredentials: Credentials<SnowflakeCredentials>;

}

export class Snowflake<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.snowflake" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SnowflakeProps) {

        super(id, props);

    }

    override getParameters() {

        const { snowflakeCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.snowflakeCredentials];

    }


}

