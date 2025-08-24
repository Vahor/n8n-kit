// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushcutApiCredentials } from "../credentials/PushcutApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PushcutTriggerNodeParameters } from "../nodes/PushcutTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface PushcutTriggerProps extends NodeProps {
    readonly parameters: PushcutTriggerNodeParameters;
    readonly pushcutApiCredentials: Credentials<PushcutApiCredentials>;
}

/**
 * Starts the workflow when Pushcut events occur
 */
export class PushcutTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.pushcutTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PushcutTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.pushcutApiCredentials];
    }

}
