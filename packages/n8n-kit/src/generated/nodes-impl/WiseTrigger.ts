// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WiseApiCredentials } from "../credentials/WiseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WiseTriggerNodeParameters } from "../nodes/WiseTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface WiseTriggerProps extends NodeProps {
    readonly parameters: WiseTriggerNodeParameters;
    readonly wiseApiCredentials: Credentials<WiseApiCredentials>;
}

/**
 * Handle Wise events via webhooks
 */
export class WiseTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.wiseTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WiseTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wiseApiCredentials];
    }

}
