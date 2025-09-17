// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CalApiCredentials } from "../credentials/CalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CalTriggerNodeParameters } from "../nodes/CalTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CalTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CalTriggerNodeParameters;
    readonly calApiCredentials: Credentials<CalApiCredentials>;
}

/**
 * Handle Cal.com events via webhooks
 */
export class CalTrigger<L extends string, C extends IContext = never, P extends CalTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.calTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.calApiCredentials];
    }

}
