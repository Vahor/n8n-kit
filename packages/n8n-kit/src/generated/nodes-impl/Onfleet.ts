// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OnfleetApiCredentials } from "../credentials/OnfleetApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OnfleetNodeParameters } from "../nodes/Onfleet";
import { Node, type NodeProps } from "../../nodes/node";

export interface OnfleetProps extends NodeProps {
    readonly parameters: OnfleetNodeParameters;
    readonly onfleetApiCredentials: Credentials<OnfleetApiCredentials>;
}

/**
 * Consume Onfleet API
 */
export class Onfleet<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.onfleet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OnfleetProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.onfleetApiCredentials];
    }

}
