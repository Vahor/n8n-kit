// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LinearApiCredentials } from "../credentials/LinearApi.ts";
import type { LinearOAuth2ApiCredentials } from "../credentials/LinearOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { LinearTriggerNodeParameters } from "../nodes/LinearTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface LinearTriggerProps extends NodeProps {
    readonly parameters: LinearTriggerNodeParameters;
    readonly linearApiCredentials?: Credentials<LinearApiCredentials>;
    readonly linearOAuth2ApiCredentials?: Credentials<LinearOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Linear events occur
 */
export class LinearTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.linearTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: LinearTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.linearApiCredentials, this.props!.linearOAuth2ApiCredentials];
    }

}
