// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActionNetworkApiCredentials } from "../credentials/ActionNetworkApi.ts";
import type { Credentials } from "../../credentials";
import type { ActionNetworkNodeParameters } from "../nodes/ActionNetwork";
import { Node, type NodeProps } from "../../nodes/node";

export interface ActionNetworkProps extends NodeProps {
    readonly parameters: ActionNetworkNodeParameters;
    readonly actionNetworkApiCredentials: Credentials<ActionNetworkApiCredentials>;
}

/**
 * Consume the Action Network API
 */
export class ActionNetwork<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.actionNetwork" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ActionNetworkProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.actionNetworkApiCredentials];
    }

}
