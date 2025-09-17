// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WufooApiCredentials } from "../credentials/WufooApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WufooTriggerNodeParameters } from "../nodes/WufooTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WufooTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WufooTriggerNodeParameters;
    readonly wufooApiCredentials: Credentials<WufooApiCredentials>;
}

/**
 * Handle Wufoo events via webhooks
 */
export class WufooTrigger<L extends string, C extends IContext = never, P extends WufooTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wufooTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wufooApiCredentials];
    }

}
