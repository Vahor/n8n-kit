// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TimescaleDbCredentials } from "../credentials/TimescaleDb.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TimescaleDbNodeParameters } from "../nodes/TimescaleDb";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TimescaleDbProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TimescaleDbNodeParameters;
    readonly timescaleDbCredentials: Credentials<TimescaleDbCredentials>;
}

/**
 * Add and update data in TimescaleDB
 */
export class TimescaleDb<L extends string, C extends IContext = never, P extends TimescaleDbProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.timescaleDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.timescaleDbCredentials];
    }

}
