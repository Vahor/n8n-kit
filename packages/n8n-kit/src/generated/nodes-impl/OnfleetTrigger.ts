// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OnfleetApiCredentials } from "../credentials/OnfleetApi.ts";
import type { Credentials } from "../../credentials";
import type { OnfleetTriggerNodeParameters } from "../nodes/OnfleetTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface OnfleetTriggerProps extends NodeProps {
    readonly parameters: OnfleetTriggerNodeParameters;
    readonly onfleetApiCredentials: Credentials<OnfleetApiCredentials>;
}

/**
 * Starts the workflow when Onfleet events occur
 */
export class OnfleetTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.onfleetTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OnfleetTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.onfleetApiCredentials];
    }

}
