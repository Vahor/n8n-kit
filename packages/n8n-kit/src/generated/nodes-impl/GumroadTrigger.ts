// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GumroadApiCredentials } from "../credentials/GumroadApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GumroadTriggerNodeParameters } from "../nodes/GumroadTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GumroadTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GumroadTriggerNodeParameters;
    readonly gumroadApiCredentials: Credentials<GumroadApiCredentials>;
}

/**
 * Handle Gumroad events via webhooks
 */
export class GumroadTrigger<L extends string, C extends IContext = never, P extends GumroadTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.gumroadTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.gumroadApiCredentials];
    }

}
