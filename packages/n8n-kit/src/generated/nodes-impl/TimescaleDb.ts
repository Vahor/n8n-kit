// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TimescaleDbCredentials } from "../credentials/TimescaleDb.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TimescaleDbNodeParameters } from "../nodes/TimescaleDb";
import { Node, type NodeProps } from "../../nodes/node";

export interface TimescaleDbProps extends NodeProps {
    readonly parameters: TimescaleDbNodeParameters;
    readonly timescaleDbCredentials: Credentials<TimescaleDbCredentials>;
}

/**
 * Add and update data in TimescaleDB
 */
export class TimescaleDb<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.timescaleDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TimescaleDbProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.timescaleDbCredentials];
    }

}
