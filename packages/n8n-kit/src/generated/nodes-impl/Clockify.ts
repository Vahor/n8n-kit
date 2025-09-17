// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClockifyApiCredentials } from "../credentials/ClockifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ClockifyNodeParameters } from "../nodes/Clockify";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ClockifyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ClockifyNodeParameters;
    readonly clockifyApiCredentials: Credentials<ClockifyApiCredentials>;
}

/**
 * Consume Clockify REST API
 */
export class Clockify<L extends string, C extends IContext = never, P extends ClockifyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.clockify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.clockifyApiCredentials];
    }

}
