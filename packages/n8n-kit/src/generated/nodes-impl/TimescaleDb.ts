// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TimescaleDbCredentials } from "../credentials/TimescaleDb.ts";
import type { Credentials } from "../../credentials";
import type { TimescaleDbNodeParameters } from "../nodes/TimescaleDb";
import { Node, type NodeProps } from "../../nodes";

export interface TimescaleDbProps extends NodeProps, TimescaleDbNodeParameters {

    readonly timescaleDbCredentials: Credentials<TimescaleDbCredentials>;

}

export class TimescaleDb<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.timescaleDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TimescaleDbProps) {

        super(id, props);

    }

    override getParameters() : Omit<TimescaleDbNodeParameters, "timescaleDbCredentials"> {

        const { timescaleDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.timescaleDbCredentials];

    }


}

