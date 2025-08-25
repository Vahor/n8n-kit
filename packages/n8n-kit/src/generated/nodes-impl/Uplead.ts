// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UpleadApiCredentials } from "../credentials/UpleadApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { UpleadNodeParameters } from "../nodes/Uplead";
import { Node, type NodeProps } from "../../nodes/node";

export interface UpleadProps extends NodeProps {
    readonly parameters: UpleadNodeParameters;
    readonly upleadApiCredentials: Credentials<UpleadApiCredentials>;
}

/**
 * Consume Uplead API
 */
export class Uplead<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.uplead" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: UpleadProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.upleadApiCredentials];
    }

}
