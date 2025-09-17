// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClockifyApiCredentials } from "../credentials/ClockifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ClockifyTriggerNodeParameters } from "../nodes/ClockifyTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ClockifyTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ClockifyTriggerNodeParameters;
    readonly clockifyApiCredentials: Credentials<ClockifyApiCredentials>;
}

/**
 * Listens to Clockify events
 */
export class ClockifyTrigger<L extends string, C extends IContext = never, P extends ClockifyTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.clockifyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.clockifyApiCredentials];
    }

}
