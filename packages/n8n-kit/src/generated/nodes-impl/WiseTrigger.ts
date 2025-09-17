// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WiseApiCredentials } from "../credentials/WiseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WiseTriggerNodeParameters } from "../nodes/WiseTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WiseTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WiseTriggerNodeParameters;
    readonly wiseApiCredentials: Credentials<WiseApiCredentials>;
}

/**
 * Handle Wise events via webhooks
 */
export class WiseTrigger<L extends string, C extends IContext = never, P extends WiseTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wiseTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wiseApiCredentials];
    }

}
